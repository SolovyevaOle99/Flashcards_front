import React from "react";
import style from "./CreateButton.module.css";
import {NavLink} from "react-router-dom";

const CreateButton = () => {
    return (
        <button className={style.CreateButton}>
            <NavLink className = { navData => navData.isActive ? style.active : style.enter } to="/createModulePage">
                Создать
            </NavLink>
        </button>
    );
}

export default CreateButton;