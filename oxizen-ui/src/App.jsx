import './App.css'
import ProductList from "./components/ProductList";
import Cart from './components/Cart';
<Cart />
export default function App() {
    return (
        <div>
            <h1 style= { {textAlign: "center", color: "#0288d1" }}>
            Oxizen
            </h1>
        <ProductList/>
       </div>
    );
}


