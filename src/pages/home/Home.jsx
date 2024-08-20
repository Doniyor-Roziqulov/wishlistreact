import React from "react";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import "./Home.css";

const Home = () => {
    const { data: paylaod, loading } = useFetch("/products", { limit: 8 });

    return (
        <div className="bg-neutral-800 pt-7 mx-auto px-5">
            <h2 className="text-center text-4xl text-white">Home</h2>
            {loading && (
                <div className="flex justify-center">
                    <div class="wrapper">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                    </div>
                </div>
            )}
            <Products title={"New products"} data={paylaod?.products} />
        </div>
    );
};

export default Home;
