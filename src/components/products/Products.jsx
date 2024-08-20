import { useStateValue } from "@/context";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

const Products = ({ data, title }) => {
    const [_, dispatch] = useStateValue();
    let items = data?.map((product) => (
        <div
            className="border p-3 rounded-xl bg-stone-900 relative"
            key={product.id}>
            <div className="w-full h-60 bg-zinc-800 rounded-xl">
                <img
                    className="w-full h-full object-contain"
                    src={product.images[0]}
                    alt="Photo"
                />
            </div>
            <p className="text-white mt-2">{product.title}</p>
            <strong className="text-3xl text-white block">
                {product.price} USD
            </strong>
            <button
                className="block ml-auto mr-2"
                onClick={() => {
                    dispatch({ type: "TOGGLE_CART", payload: product });
                    toast.success("Added cart", { position: "bottom-right" });
                }}>
                <RiShoppingCartFill className="text-white text-2xl  hover:text-green-600" />
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "TOGGLE_WISHLIST", payload: product });
                    toast.success("Added like", { position: "bottom-right" });
                }}>
                <FaRegHeart className="text-white text-2xl absolute top-7 right-7 hover:text-red-500" />
            </button>
        </div>
    ));
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <div className="grid grid-cols-4 gap-2">{items}</div>
        </div>
    );
};

export default Products;
