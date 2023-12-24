import React from "react";
import logo from "../../../logo/logo.svg"; // Tell webpack this JS file uses this image
import header from "./Header.module.css";

const Header = () => {

  return (
    <img className={header.logo} src={logo} alt="Logo" />
  );
}

export default Header;
