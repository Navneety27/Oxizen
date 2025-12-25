import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = category
            ? "https://localhost:7121/api/product/category/" + category
            : "https://localhost:7121/api/product";

        axios.get(url).then(res => setProducts(res.data));
    }, [category]);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            padding: "25px"
        }}>
            {products.map(p => (
                <div key={p.id} style={{
                    background: "white",
                    borderRadius: "15px",
                    width: "240px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.1)",
                    overflow: "hidden",
                    transition: "0.3s",
                }}>

                    <img
                        src={p.imageUrl}
                        style={{ width: "100%", height: "220px", objectFit: "cover" }}
                    />

                    <div style={{ padding: "15px" }}>
                        <h3 style={{ margin: "5px 0" }}>{p.name}</h3>
                        <p style={{ color: "#0288d1", fontWeight: "bold" }}>
                            ₹{p.price}
                        </p>

                        <button
                            onClick={() =>
                                axios.post("https://localhost:7121/api/cart", { productId: p.id })
                            }
                            style={{
                                width: "100%",
                                background: "#0288d1",
                                color: "white",
                                border: "none",
                                padding: "10px",
                                borderRadius: "8px",
                                cursor: "pointer"
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
}
