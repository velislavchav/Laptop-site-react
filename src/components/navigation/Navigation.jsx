import React from 'react'
import { Link } from "react-router-dom";
import { getCookie } from "../shared/helpers/cookieSetter"
import "./navigation.css"
import logo from "./logo.png"
import userService from '../shared/helpers/userService';

const handleClickLogout = () => {
    userService.logout();
}

const Navigation = () => {
    const isLogged = !!getCookie('x-auth-token')
    return (
        <header id="flex">
            <Link to="/"><img src={logo} id="logoNavbar" alt="logo" /></Link>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/">Home</Link></li>
                    {isLogged && <li><Link to="/products">Products</Link></li>}
                    {isLogged && <li><Link to="/create-product">Create</Link></li>}
                    {!isLogged && <li><Link to="/register">Register</Link></li>}
                    {!isLogged && <li><Link to="/login">Login</Link></li>}
                    {isLogged && <li><Link to="/profile">Profile</Link></li>}
                    <li><Link to="/about">About us</Link></li>
                    {isLogged && <li><a href="/" onClick={handleClickLogout}>Logout</a></li>}
                </ul>
            </nav>
            <Link className="cta" to="/gallery"><button>Gallery</button></Link>
        </header >
    )
}

export default Navigation;