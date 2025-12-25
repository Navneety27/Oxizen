import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
    const [category, setCategory] = useState("");

    return (
        <>
            <Navbar setCategory={setCategory} />

            <div style={{ display: "flex" }}>
                <div style={{ flex: 3 }}>
                    <ProductList category={category} />
                </div>
                <div style={{
                    flex: 1,
                    padding: "20px",
                    background: "#f5faff",
                    minHeight: "100vh",
                    borderLeft: "1px solid #add"
                }}>
                    <Cart />
                </div>
            </div>
        </>
    );
}