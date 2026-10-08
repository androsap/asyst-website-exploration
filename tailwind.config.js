import animate from "tailwindcss-animate";

/**
 * Tailwind dipakai berdampingan dengan SCSS existing.
 * - preflight dimatikan: reset bawaan Tailwind akan mengubah margin heading, img, button, dll. di seluruh halaman.
 * - Token warna/font/radius mengikuti theme MUI lama (src/config/theme.tsx) agar tampilan identik.
 * @type {import('tailwindcss').Config}
 */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    corePlugins: {
        preflight: false,
        // nama class "container" rawan bentrok dengan class SCSS; pakai komponen ui/container
        container: false,
    },
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: { DEFAULT: "#2775BB", foreground: "#fff" },
                secondary: { DEFAULT: "#123554", foreground: "#fff" },
                success: { DEFAULT: "#89BA3A", foreground: "#fff" },
            },
            fontFamily: {
                inter: ["Inter"],
            },
            screens: {
                // breakpoint MUI (xs 0, sm 600, md 900, lg 1200, xl 1536)
                sm: "600px",
                md: "900px",
                lg: "1200px",
                xl: "1536px",
            },
            transitionTimingFunction: {
                // easing MUI (theme.transitions.easing)
                "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
                "ease-out": "cubic-bezier(0.0, 0, 0.2, 1)",
                "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
                sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
            },
            keyframes: {
                "page-loader-spin": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
                "page-loader-pulse": { "0%, 100%": { transform: "scale(1)", opacity: "1" }, "50%": { transform: "scale(0.88)", opacity: "0.75" } },
                // Animasi yang sebelumnya dari komponen MUI
                "mui-fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
                "mui-fade-out": { from: { opacity: "1" }, to: { opacity: "0" } },
                "mui-pulse": { "0%": { opacity: "1" }, "50%": { opacity: "0.4" }, "100%": { opacity: "1" } },
                "mui-ripple-enter": { "0%": { transform: "scale(0)", opacity: "0.1" }, "100%": { transform: "scale(1)", opacity: "0.3" } },
                "mui-ripple-exit": { "0%": { opacity: "1" }, "100%": { opacity: "0" } },
                "mui-ripple-pulsate": { "0%": { transform: "scale(1)" }, "50%": { transform: "scale(0.92)" }, "100%": { transform: "scale(1)" } },
                "mui-circular-rotate": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
                "mui-circular-dash": {
                    "0%": { strokeDasharray: "1px,200px", strokeDashoffset: "0" },
                    "50%": { strokeDasharray: "100px,200px", strokeDashoffset: "-15px" },
                    "100%": { strokeDasharray: "100px,200px", strokeDashoffset: "-125px" },
                },
            },
            animation: {
                "page-loader-spin": "page-loader-spin 1s linear infinite",
                "page-loader-pulse": "page-loader-pulse 1.4s ease-in-out infinite",
                "mui-pulse": "mui-pulse 2s ease-in-out 0.5s infinite",
                "mui-circular-rotate": "mui-circular-rotate 1.4s linear infinite",
                "mui-circular-dash": "mui-circular-dash 1.4s ease-in-out infinite",
            },
        },
    },
    plugins: [animate],
};
