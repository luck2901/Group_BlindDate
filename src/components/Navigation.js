import React from "react";
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Welcome JBNU</a>
                <ul id="nav-mobile" className="right hide-on-mid-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Chat">Chat</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;