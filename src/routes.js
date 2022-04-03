import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";

import ScrollToTop from "./components/ScrollToTop.jsx";

export default function MyRoutes () {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/sobre-mim" element={<Sobre />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}