import React, {Component} from 'react';
import NavLink from "./NavLink";

class Navbar extends Component {


    render() {
        return (
            <nav className="navbar">
                <NavLink/>
            </nav>
        );
    }
}

export default Navbar;