import { useEffect, useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar({ setCategory, setSearch }) {
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://localhost:7121/api/cart")
            .then(res => {
                const total = res.data.reduce((sum, i) => sum + i.quantity, 0);
                setCartCount(total);
            });
    }, []);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 30px",
            background: "#0a74c9",
            color: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,.15)"
        }}>

            <div style={{ fontSize: "26px", fontWeight: "800" }}>OXIZEN</div>

            <div style={{
                display: "flex",
                alignItems: "center",
                background: "white",
                padding: "6px 12px",
                borderRadius: "25px",
                width: "300px"
            }}>
                <FaSearch color="#777" />
                <input
                    placeholder="Search products"
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ border: "none", outline: "none", marginLeft: "8px", width: "100%" }}
                />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <span onClick={() => setCategory("")}>All</span>
                <span onClick={() => setCategory("Fashion")}>Fashion</span>
                <span onClick={() => setCategory("Electronics")}>Electronics</span>
                <span onClick={() => setCategory("Books")}>Books</span>
                <span onClick={() => setCategory("Phones")}>Phones</span>

                <div style={{ position: "relative" }}>
                    <FaShoppingCart
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/cart")}
                    />

                    {cartCount > 0 && (
                        <div style={{
                            position: "absolute",
                            top: "-6px",
                            right: "-10px",
                            background: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "2px 6px",
                            fontSize: "12px",
                            fontWeight: "bold"
                        }}>
                            {cartCount > 10 ? "10+" : cartCount}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
