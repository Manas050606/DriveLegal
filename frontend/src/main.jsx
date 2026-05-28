import React from "react";

import ReactDOM from "react-dom/client";

import {

    BrowserRouter

} from "react-router-dom";


// ==============================================
// GLOBAL CSS
// ==============================================

import "./styles/global.css";


// ==============================================
// APP
// ==============================================

import App from "./App";


// ==============================================
// RENDER APP
// ==============================================

ReactDOM.createRoot(

    document.getElementById("root")

).render(

    <React.StrictMode>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </React.StrictMode>
);