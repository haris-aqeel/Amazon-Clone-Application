import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue }from './StateProvider'
import { auth } from "./firebase";

function Header() {

    const [ {basket, user} ] = useStateValue();
    const login = () =>{
        if (user){
            auth.signOut();
        }
    }
  return (
    <nav className="header">
        {/* Amazon Logo */}
        <Link to="/">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
            />
        </Link>

        {/* Search Option */}
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        {/* Links */}
        <div className="header__nav">

            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionNumberOne">
                        Hello ${user?.email}
                    </span>
                    <span className="header__optionNumberTwo">
                        {user?'Sign Out': 'Sign In'}
                    </span>
                </div>
            </Link>

            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionNumberOne">
                        Returns
                    </span>
                    <span className="header__optionNumberTwo">
                        & Orders
                    </span>
                </div>
            </Link>


            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionNumberOne">
                        Try
                    </span>
                    <span className="header__optionNumberTwo">
                        Prime
                    </span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    < ShoppingBasketIcon/>
                    {/* Number Of Items In The Basket */}
                    <span>
                        {basket.length}
                    </span>
                </div>
            </Link>


        </div>
    </nav>
  );
}

export default Header;
