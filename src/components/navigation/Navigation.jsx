import React from 'react'
import { Link } from "react-router-dom";
import "./navigation.css"
import logo from "./logo.png"
import userService from '../shared/helpers/userService';

const handleClickLogout = (history) => {
    userService.logout(history);
}

const Navigation = ({ isLogged }) => {
    return (
        <header id="flex">
            <Link to="/"><img src={logo} id="logoNavbar" alt="logo" /></Link>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/">Home</Link></li>
                    {isLogged && <li><Link to="/products">Products</Link></li>}
                    {isLogged && <li><Link to="/create-product">Create</Link></li>}
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
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