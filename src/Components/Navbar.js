import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthContext } from "../context/AuthContext";
import ProfilePic from "./ProfilePic";
import { FaPizzaSlice } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

const Navbar = ({ active, setActive }) => {
  const { auth } = useAuthContext();
  return (
    <div className="main-navbar">
      <div className="logo-container">
        <Link
          to="/"
          className="logo-container"
          style={{ textDecoration: "none" }}
        >
          <img src={logo} alt="logo" className="logo" />
          <p
            style={{
              marginTop: -10,
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
            }}
          >
            La cantina de Garufa
          </p>
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Busca que comer!"
          className="search-input"
        />
        <button className="search-btn">
          <GrSearch size={22} />
        </button>
      </div>
      <ul className="links-ul">
        <Link className="nav-links" to="/products">
          <h2 className="links">Comidas</h2>
        </Link>
        <Link className="cart-link" to="/cart">
          <h2 style={{ marginRight: 14, color: "white" }}>
            <FaPizzaSlice
              size={18}
              color="white"
              style={{ marginRight: 2, marginLeft: 14 }}
            />
            01
          </h2>
        </Link>
        <Link className="nav-links" to="/favourites">
          <h2 className="links">Favoritos</h2>
        </Link>

        <Link className="nav-links" to="/account">
          <h2 className="links">{auth ? "Mi Cuenta" : "Ingresa"}</h2>
          <ProfilePic width={64} height={64} />
        </Link>
      </ul>

      <GiHamburgerMenu
        size={24}
        className="hamburguer"
        color={active ? "white" : "black"}
        onClick={() => setActive(!active)}
      />
    </div>
  );
};

export default Navbar;
