import React from "react";
import style from "./Menu2.module.css";
import { NavLink } from "react-router-dom";

import img from "../../img/ProfilePic.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import "./Dropdown.css";
import { useState } from "react";
// import axios from "axios";

const Dropdown = ({ selected, setSelected }) => {
  const { logout } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <img className={style.icon} src={img} alt="icon" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <NavLink to="/SettingsPage">Настройки</NavLink>
          </div>
          <div className="dropdown-item" onClick={logout}>
            <NavLink to="/mainPage">Выйти</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
