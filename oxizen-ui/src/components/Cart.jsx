import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7121/api/cart")
            .then(res => setItems(res.data));
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>

            {items.map((i, index) => (
                <div key={index} style={{
                    background: "white",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "8px"
                }}>
                    <h4>{i.name}</h4>
                    <p>Price: ₹{i.price}</p>
                    <p>Qty: {i.quantity}</p>
                    <p>Total: ₹{i.total}</p>
                </div>
            ))}
        </div>
    );
}
