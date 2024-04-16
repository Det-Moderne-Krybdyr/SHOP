import { useContext } from 'react'
import Context from './Context'
import "./Styling/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="Header">
            <a href="/">
                <img src="/Arne_Logo.png" alt="Logo" />
            </a>
            <div className="search-container">
                <form action="/">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} className="soeg"/>
                    </button>
                </form>
            </div>
            <div className="ikoner">
                <button type="user">
                    <FontAwesomeIcon icon={faUser} className="ikon"/>
                </button>
                <button type="favorites">
                    <FontAwesomeIcon icon={faHeart} className="ikon"/>
                </button>
                <button type="cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="ikon"/>
                </button>
            </div>
        </div>
    );
}

export default Header;
