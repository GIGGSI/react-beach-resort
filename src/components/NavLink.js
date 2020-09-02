import React from 'react';
import {Link} from "react-router-dom";

export default function NavLink() {
    return (
        <ul
            className={this.state.isOpen ? "nav-links show-nav" :
                "nav-links"}>
            <li>
                <Link to="/" onClick={this.setClick}>Home</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
            </li>
            <li>
                <Link to="/beach">Beach</Link>
            </li>
            <li>
                <Link to="/restaurant">Restaurant</Link>
            </li>
        </ul>
    )
}
