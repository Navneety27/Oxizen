import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7121/api/cart")
            .then(res => setItems(res.data));
    }, []);

    const total = items.reduce((sum, i) => sum + i.total, 0);

    return (
        <div style={{ display: "flex", gap: "20px" }}>

            {/* LEFT - CART ITEMS */}
            <div style={{ flex: 3 }}>
                {items.map((i, index) => (
                    <div key={index} style={{
                        background: "white",
                        padding: "15px",
                        borderRadius: "12px",
                        display: "flex",
                        gap: "15px",
                        marginBottom: "15px",
                        boxShadow: "0 5px 15px rgba(0,0,0,.08)"
                    }}>
                        <img src={i.imageUrl || "https://via.placeholder.com/80"} width="80" />

                        <div style={{ flex: 1 }}>
                            <h4>{i.name}</h4>
                            <p>₹{i.price}</p>
                            <p>Qty: {i.quantity}</p>

                            <button style={{
                                background: "none",
                                border: "none",
                                color: "#0288d1",
                                cursor: "pointer"
                            }}>
                                Remove
                            </button>
                        </div>

                        <h4>₹{i.total}</h4>
                    </div>
                ))}
            </div>

            {/* RIGHT - PRICE SUMMARY */}
            <div style={{
                flex: 1,
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
                height: "fit-content"
            }}>
                <h3>Price Details</h3>
                <p>Total Items: {items.length}</p>
                <h2>₹{total}</h2>

                <button
                    style={{
                        width: "100%",
                        padding: "15px",
                        background: "#fb641b",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginTop: "20px"
                    }}
                >
                    PLACE ORDER
                </button>
            </div>

        </div>
    );
}
