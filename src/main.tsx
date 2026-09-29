import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from 'shared/router'
import { BrowserRouter } from 'react-router-dom';
import "./assets/styles/main.scss"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainApp />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
