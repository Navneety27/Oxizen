import axios from "axios";

export default function Checkout() {
    return (
        <button
            style={{
                width: "100%",
                padding: "15px",
                background: "#0a74c9",
                color: "white",
                border: "none",
                borderRadius: "10px",
                marginTop: "20px",
                cursor: "pointer"
            }}
            onClick={() => {
                axios.post("https://localhost:7121/api/order")
                    .then(res => alert("Payment Successful! Order ID: " + res.data.orderId));
            }}
        >
            Proceed to Pay
        </button>
    );
}
