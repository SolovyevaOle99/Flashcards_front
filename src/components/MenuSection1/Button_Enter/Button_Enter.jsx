import React from "react";
import style from "./Button_Enter.module.css";
import {NavLink} from "react-router-dom";

const Button_Enter = () => {
    return (
        <button className={style.button}>
            <NavLink className = { navData => navData.isActive ? style.active : style.enter } to="/login">Вход</NavLink>
        </button>
    );
}

export default Button_Enter;