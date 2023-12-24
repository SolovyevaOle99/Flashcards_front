import React from "react";
import style from "./ButtonRegistrNow.module.css";
import {NavLink} from "react-router-dom";


const Button_Registr_now = () => {
    return (
        <button className={style.button}>
            <NavLink  to="/register" className = { navData => navData.isActive ? style.active : style.nav }>Зарегистрироваться сейчас</NavLink> 
        </button>
    );
}

export default Button_Registr_now;