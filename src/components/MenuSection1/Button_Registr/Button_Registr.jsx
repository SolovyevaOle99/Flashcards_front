import React from "react";
import style from "./Button_Registr.module.css";
import {NavLink} from "react-router-dom";

const Button_Registr = () => {
    return (
        <button className={style.Button_registr}>
            <NavLink className = { navData => navData.isActive ? style.active : style.enter } to="/register">
                Регистрация
            </NavLink>
        </button>
    );
}

export default Button_Registr;