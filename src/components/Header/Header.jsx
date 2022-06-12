import "./Header.css";
import logoCircle from "../../assets/images/logo-circle.png";
import loupIcon from "../../assets/images/loup-icon.svg";
import { Link, NavLink } from "react-router-dom";
import {ReactComponent as CartIcon} from "../../assets/images/cart-icon.svg";
import { useState } from "react";
import { setSearchValue } from "../../redux/actions/search";
import { useDispatch } from "react-redux";

const Header = () => {

    const dispatch = useDispatch()

    const onChangeSearchInput = (event) => {
        dispatch(setSearchValue(event.target.value))
    }

    return (
        <div className="header-main">
                <Link to='/' className="logo-block" >
                    <img className="logo-image" src={logoCircle} alt="Logo" />
                    <span className="store-name-text">SNEAKERS-STORE</span>
                </Link>
            <div className="store-name-block"></div>

            <div className="menu-block">
                <NavLink to='catalog' className="menu-name-block">
                    <span className="menu-text">Каталог</span>
                </NavLink>
                <NavLink to='delivery-payment-info' className="menu-name-block" onClick={() => {}}>
                    <span className="menu-text">Доставка</span>
                </NavLink>
                <NavLink to='contacts' className="menu-name-block">
                    <span className="menu-text">Контакты</span>
                </NavLink>
            </div>

            <div className="search-block">
                <img src={loupIcon} alt="Search" />
                <input placeholder="Поиск..." onChange={onChangeSearchInput} />
            </div>

            <div className="cart-block">
                {/* <img className="header-icon-img" src={loginIcon} alt="Login" /> */}

                <NavLink to="cart">
                    <CartIcon className="header-icon-img"/>
                </NavLink>
                
            </div>
        </div>
    );
};

export default Header;
