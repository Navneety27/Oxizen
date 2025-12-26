import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

export default function CartPage() {
    return (
        <div style={{ padding: "30px" }}>
            <h2>Your Shopping Cart</h2>
            <Cart />
            <Checkout />
        </div>
    );
}
