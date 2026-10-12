import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from 'shared/router'
import router from 'shared/router/router'
import { BrowserRouter, matchRoutes } from 'react-router-dom';
import "./assets/styles/main.scss"
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

const initialPage = matchRoutes(router, window.location.pathname)?.[0]?.route.component;
if (initialPage) initialPage.preload().then(render, render);
else render();
