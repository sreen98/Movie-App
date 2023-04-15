import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={avatar} alt="user" />
      </div>
    </div>
  );
};

export default Header;
