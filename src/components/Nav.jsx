import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link className="me-5" to="/">
                Home
            </Link>
            <Link className="me-5" to="/about">
                About
            </Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
};

export default Nav;