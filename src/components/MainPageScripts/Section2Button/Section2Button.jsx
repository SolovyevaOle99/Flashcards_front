import React from "react";
import style from "./Section2Button.module.css";
import {NavLink} from "react-router-dom";


const Section2Button = () => {
    return (
        <button className={style.button}>
            <NavLink to="/register" className = { navData => navData.isActive ? style.active : style.nav }>
                Начать
            </NavLink>
        </button>
    );
}

export default Section2Button;