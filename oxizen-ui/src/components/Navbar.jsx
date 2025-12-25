import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar({ setCategory }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 30px",
            background: "#0a74c9",
            color: "white",
            boxShadow:"0.4px 10px rgba(0,0,0,.15)"
        }}>
            {/*Logo*/}
            <div style={{
                fontSize: "26px",
                fontWeight: "800",
                letterSpacing: "2px",
                fontFamily:"Poppins"
            }}>
            OXIZEN
            </div>

            {/*SEARCH BAR*/}
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
                    style={{
                        border: "none",
                        outline: "none",
                        marginLeft: "8px",
                        width: "100%",
                        fontSize: "14px"
                    }}
                />
            </div>

            {/* MENU + CART */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                fontSize: "14px"
            }}>
                <span onClick={() => setCategory("")}>All</span>
                <span onClick={() => setCategory("Fashion")}>Fashion</span>
                <span onClick={() => setCategory("Electronics")}>Electronics</span>
                <span onClick={() => setCategory("Books")}>Books</span>
                <span onClick={() => setCategory("Phones")}>Phones</span>

                <FaShoppingCart size={20} style={{ cursor: "pointer" }} />
            </div>

        </div>
    );
}
            