import React from "react";
import style from "./ModuleName.module.css";

const ModuleName = (props) => {
    return (
        <div className={style.div}>
            <input className={style.input} type="text" placeholder={props.name}></input>
            <p className={style.p}>{props.text}</p>
        </div>
    );
}

export default ModuleName;