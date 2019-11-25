import React from 'react'
import "./navigation.css"
import logo from "./logo1.png"

const Navigation = () => {
    return (
        <header id="flex">
            <img src={logo} id="logoNavbar" alt="logo" />
            <nav>
                <ul className="nav__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/create">Create</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/profile">Profile</a></li>

                </ul>
            </nav>
            <a className="cta" href="/about"><button>CONTACT</button></a>
        </header>
    )
}

export default Navigation;