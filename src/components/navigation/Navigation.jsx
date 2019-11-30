import React from 'react'
import { Link } from "react-router-dom";
import "./navigation.css"
import logo from "./logo.png"

const Navigation = () => {
    return (
        <header id="flex">

            <Link to="/"><img src={logo} id="logoNavbar" alt="logo" /></Link>
            <nav>
                <ul className="nav__links">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/create-product">Create</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
            <a className="cta" href="/about"><button>CONTACT</button></a>

        </header>
    )
}

export default Navigation;