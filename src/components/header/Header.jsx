import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <header className=" bg-neutral-700 h-20">
            <div className="h-full flex gap-8 items-center px-5 container mx-auto">
                <NavLink
                    className="text-2xl flex-1 text-white font-bold"
                    to={"/"}>
                    Logo
                </NavLink>
                <NavLink className="text-white" to={"/"}>
                    Home
                </NavLink>
                <NavLink className="text-white" to={"/wishlist"}>
                    Wishlist
                </NavLink>
                <NavLink to={"/cart"}>
                    <FiShoppingCart className="text-white text-xl" />
                </NavLink>
                <NavLink className="text-white" to={"/login"}>
                    Login
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
