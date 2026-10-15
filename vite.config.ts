import dotenv from "dotenv"
import { defineConfig, Plugin } from "vite"
import type { OutputChunk } from "rollup"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import { VitePWA } from "vite-plugin-pwa"

dotenv.config({ path: [".env.local", ".env"] });

const preloadRouteChunks = (pages: Record<string, string>): Plugin => ({
    name: "preload-route-chunks",
    apply: "build",
    transformIndexHtml: {
        order: "post",
        handler(_html, ctx) {
            const chunks = Object.values(ctx.bundle ?? {}).filter((c): c is OutputChunk => c.type === "chunk");
            const routes: Record<string, string[]> = {};
            for (const [pathname, file] of Object.entries(pages)) {
                const entry = chunks.find(c => c.facadeModuleId?.replace(/\\/g, "/").endsWith(file));
                if (!entry) continue;
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
                tag: "script",
                injectTo: "head",
                children: `(function(r){(r[location.pathname]||[]).forEach(function(f){var l=document.createElement('link');` +
                    `if(/\\.css$/.test(f)){l.rel='preload';l.as='style'}else{l.rel='modulepreload';l.crossOrigin=''}` +
                    `l.href='/'+f;document.head.appendChild(l)})})(${JSON.stringify(routes)})`,
            }];
        },
    },
});

export default defineConfig({
    plugins: [
        svgr(),
        react(),
        tsconfigPaths(),
        VitePWA({
            selfDestroying: true,
            injectRegister: null,
            manifest: {
                name: "PT Aero Systems Indonesia",
                short_name: "Asyst",
                description: "Enterprise technology, aviation systems and digital transformation partner in Indonesia.",
                lang: "id",
                icons: [{ src: "/logo-asyst.png", sizes: "100x100", type: "image/png" }],
                theme_color: "#2775BB",
                background_color: "#FFFFFF",
                display: "standalone",
                scope: "/",
                start_url: "/",
            },
        }),
        preloadRouteChunks({ "/": "/src/pages/index.tsx" }),
    ],
    server: {
        host: "localhost",
        port: 3006,
        hmr: {
            overlay: false,
        },
        proxy: {
            "/api/v1": {
                target: "https://www.asyst.co.id",
                changeOrigin: true,
                secure: true,
                headers: process.env.ASYST_API_TOKEN ? { Authorization: `Bearer ${process.env.ASYST_API_TOKEN}` } : undefined,
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["legacy-js-api"],
            },
        },
    },
    build: {
        outDir: "./build",
        target: "es2020",
        cssCodeSplit: true,
        reportCompressedSize: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom", "react-router-dom"],
                },
            },
        },
    },
})
