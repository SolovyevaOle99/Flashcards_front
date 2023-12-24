import React from "react";
import style from "./Termin.module.css";

const Termin = (props) => {

    return (
        <div className={style.div}>
            <input onChange={props.onTerm} className={style.input} type="text" placeholder={props.name} value={props.newTermin}/>
            <p className={style.p}>{props.text}</p>
        </div>
    );
}

export default Termin;