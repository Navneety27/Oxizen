import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7121/api/product")
            .then(res => setProducts(res.data));
    },[]);

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            {
                product.map(p => (
                    <div key={p.id} style={{
                        background: "white",
                        padding: "15px",
                        borderRadius: "10px",
                        width: "200px",
                        boxShadow: "0 4PX 10PX RGBA(0,0,0,.1)"
                    }}>
                        <h3>{p.name}</h3>
                        <p>₹{p.price}</p>
                        <button onClick={() => {
                            axios.post("https://localhost:7121/api/cart", { productId: p.id })
                        }}>
                            <img
                                src={p.imageUrl}
                                width="100%"
                                style={{ borderRadius: "10px" }}
                                />
                            Add to Cart
                        </button>
                    </div>
                ))}
        </div>
    );
}