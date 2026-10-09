import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from 'shared/router'
import router from 'shared/router/router'
import { BrowserRouter, matchRoutes } from 'react-router-dom';
import "./assets/styles/main.scss"
// Setelah main.scss: utility Tailwind menang atas CSS global, kalah dari SCSS halaman (sama seperti style MUI sebelumnya)
import "./assets/styles/tailwind.css"
import { ModalHost } from "components/ui/modal-host";

const render = () => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp />
            <ModalHost />
        </BrowserRouter>
    </React.StrictMode>,
)

// Unduh page yang sedang dibuka dulu, baru render: page langsung tampil tanpa fallback Suspense (lihat shared/router/lazy-page.ts)
const initialPage = matchRoutes(router, window.location.pathname)?.[0]?.route.component;
if (initialPage) initialPage.preload().then(render, render);
else render();
