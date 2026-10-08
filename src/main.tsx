import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from 'shared/router'
import { BrowserRouter } from 'react-router-dom';
import "./assets/styles/main.scss"
// Setelah main.scss: utility Tailwind menang atas CSS global, kalah dari SCSS halaman (sama seperti style MUI sebelumnya)
import "./assets/styles/tailwind.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalHost } from "components/ui/modal-host";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp />
            <ModalHost />
        </BrowserRouter>
    </React.StrictMode>,
)
