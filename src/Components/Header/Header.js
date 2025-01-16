import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/icons/logo.svg";
import acc from "../../assets/icons/acc.svg";
import heart from "../../assets/icons/heart.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import search from "../../assets/icons/search.svg";
import { HeaderContainer, TopSection, BottomSection } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TopSection>
        <div className="logo">
          <img src={logoImg} alt="Logo" />
          IZZ
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <NavLink to="/loginSignup">
            <img src={acc} alt="Account" />
            <p className="icons-text">Sign in</p>
          </NavLink>
          <NavLink to="/">
            <img src={search} alt="Search" />
            <p className="icons-text">Search</p>
          </NavLink>
          <NavLink to="/">
            <img src={heart} alt="Wishlist" />
            <p className="icons-text">Wishlist</p>
          </NavLink>
          <NavLink to="/">
            <img src={shoppingCart} alt="Cart" />
            <p className="icons-text">Cart</p>
          </NavLink>
        </div>
      </TopSection>

      <BottomSection>
        <div className="dropdown-menu">
          <p>Dropdown Menu Placeholder</p>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </BottomSection>
    </HeaderContainer>
  );
};

export default Header;
