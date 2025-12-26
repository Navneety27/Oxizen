import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function App() {
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    return (
        <>
            <Navbar setCategory={setCategory} setSearch={setSearch} />
            <ProductList category={category} search={search} />
        </>
    );
}
