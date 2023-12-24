import React from "react";
import style from "./StudyModule.module.css";

const StudyModule = (props) => {

    return (
        <div className={style.module}>
            <div className={style.row}>
                <p className={style.number}>{props.count } терминов</p>
                <p className={style.username}>username {props.username}</p>
            </div>
            <div>
                <p className={style.name}>{props.name}</p>
            </div>
        </div>
    );
}

export default StudyModule;