import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartPage from "./pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
);
