import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {

    return (
        <div className="nav">
            <div className="logo">
                <Link className="nav-link" to="/">
                    Ozan
                </Link>
            </div>
            <div className="nav-links">
                <div className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>

        </div>
    )
}