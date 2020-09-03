import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa/index";

export default function NavLink() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="beach resort"/>
                </Link>
                <button type="button" className="nav-btn"
                        onClick={closeMobileMenu} onClick={handleClick}>
                    <FaAlignRight className="nav-icon"/>
                </button>
            </div>
            <ul
                className={click ? "nav-links show-nav" :
                    "nav-links"}>
                <li>
                    <Link to="/" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/rooms" onClick={closeMobileMenu}>Rooms</Link>
                </li>
                <li>
                    <Link to="/beach" onClick={closeMobileMenu}>Beach</Link>
                </li>
                <li>
                    <Link to="/restaurant" onClick={closeMobileMenu}>Restaurant</Link>
                </li>
            </ul>
        </div>
    )
}
