import dotenv from 'dotenv'
import { defineConfig, Plugin } from "vite"
import type { OutputChunk } from "rollup"
import dns from "dns"
import react from "@vitejs/plugin-react"
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import svgr from "vite-plugin-svgr";
import { VitePWA } from 'vite-plugin-pwa'
import ManifestJson from "./manifest.json"

dotenv.config({ path: ['.env.local', '.env'] });
dns.setDefaultResultOrder("verbatim");

/**
 * Halaman di router di-lazy load, jadi chunk-nya baru ketahuan browser setelah bundle utama selesai dieksekusi.
 * Plugin ini menyisipkan script inline yang langsung mem-preload chunk (JS + CSS) halaman yang sedang dibuka,
 * paralel dengan bundle utama, supaya konten pertama (LCP) tampil lebih cepat. Hanya untuk halaman di `pages`.
 */
const preloadRouteChunks = (pages: Record<string, string>): Plugin => ({
    name: 'preload-route-chunks',
    apply: 'build',
    transformIndexHtml: {
        order: 'post',
        handler(_html, ctx) {
            const chunks = Object.values(ctx.bundle ?? {}).filter((c): c is OutputChunk => c.type === 'chunk');
            const routes: Record<string, string[]> = {};
            for (const [pathname, file] of Object.entries(pages)) {
                const entry = chunks.find(c => c.facadeModuleId?.replace(/\\/g, '/').endsWith(file));
                if (!entry) continue;
                // Import statis secara rekursif (tanpa entry utama yang sudah dimuat oleh <script type="module">)
                const files = new Set<string>();
                const visit = (chunk: OutputChunk) => {
                    if (chunk.isEntry || files.has(chunk.fileName)) return;
                    files.add(chunk.fileName);
                    chunk.viteMetadata?.importedCss.forEach(css => files.add(css));
                    chunk.imports.forEach(name => { const c = chunks.find(c => c.fileName === name); if (c) visit(c) });
                };
                visit(entry);
                routes[pathname] = [...files];
            }
            return [{
                tag: 'script',
                injectTo: 'head',
                children: `(function(r){(r[location.pathname]||[]).forEach(function(f){var l=document.createElement('link');` +
                    `if(/\\.css$/.test(f)){l.rel='preload';l.as='style'}else{l.rel='modulepreload';l.crossOrigin=''}` +
                    `l.href='/'+f;document.head.appendChild(l)})})(${JSON.stringify(routes)})`,
            }];
        },
    },
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), tsconfigPaths(), reactRefresh(), dynamicImportVars({
        include: ['**/*.js', '**/*.ts', '**/*.tsx'], // Pilih file-file JavaScript yang ingin Anda proses
        exclude: ['node_modules/**'], // File-file yang ingin Anda abaikan
    }), VitePWA(ManifestJson), preloadRouteChunks({ '/': '/src/pages/index.tsx' })],
    server: {
        host: "localhost",
        port: 3006,
        hmr: {
            // Mengonfigurasi hot module replacement (HMR) jika diperlukan
            overlay: false,
        },
        proxy: {
            '/api/v1': {
                target: 'https://www.asyst.co.id',
                changeOrigin: true,
                secure: true,
                headers: process.env.ASYST_API_TOKEN ? { Authorization: `Bearer ${process.env.ASYST_API_TOKEN}` } : undefined,
            },
            '/traveldoclocations': {
                target: 'https://widget.api.traveldoc.aero/WidgetService.svc/JSON/GetLocations?Language=en',
                changeOrigin: false,
                secure: false,
                rewrite: (path) => path.replace(/^\/traveldoclocations/, '')
            },
            '/traveldoc': {
                target: 'https://widget.api.traveldoc.aero',
                changeOrigin: false,
                secure: false,
                rewrite: (path) => path.replace(/^\/traveldoc/, '/WidgetService.svc/JSON/GetResults')
            },
            '/configs': {
                target: 'http://103.126.57.142:8282/api/config',
                changeOrigin: false,
                secure: false,
                rewrite: (path) => path.replace(/^\/configs/, '')
            },
            '/maintenances': {
                target: 'http://103.126.57.142:8282/api/maintenance',
                changeOrigin: false,
                secure: false,
                rewrite: (path) => path.replace(/^\/maintenances/, '')
            },
            // '/socket.io': {
                // target: 'http://103.126.57.142:8282',
                // changeOrigin: false,
                // secure: false,
                // ws: true,
            // },
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.ts': 'tsx',
            },
        },
    },
    esbuild: {
        loader: 'tsx',
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Vite 4 hanya mendukung legacy JS API Sass; hilang saat upgrade ke Vite 5.4+
                silenceDeprecations: ['legacy-js-api'],
            },
        },
    },
    root: './',
    build: {
        outDir: './build',
        // rollupOptions: {
        //     plugins: [],
        //     onwarn: () => {
        //         return;
        //     },
        //     // output: {
        //     //     dynamicImportFunction: 'importShim',
        //     // },

        // },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    },
})
