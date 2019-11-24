import React from 'react'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/disabled" aria-disabled="true">Disabled</a>
                    {/* tabindex="-1" -----attribute*/}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;