import dotenv from 'dotenv'
import { defineConfig } from "vite"
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

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), tsconfigPaths(), reactRefresh(), dynamicImportVars({
        include: ['**/*.js', '**/*.ts', '**/*.tsx'], // Pilih file-file JavaScript yang ingin Anda proses
        exclude: ['node_modules/**'], // File-file yang ingin Anda abaikan
    }), VitePWA(ManifestJson)],
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
