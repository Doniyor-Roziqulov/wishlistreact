import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import React from "react";

const Cart = () => {
    const [data, dispatch] = useStateValue();
    return (
        <div className="bg-neutral-800 mx-auto px-5">
            <h2 className="text-center text-4xl text-white">Cart</h2>
            <Products title={"Cart"} data={data.cart} />
        </div>
    );
};

export default Cart;
