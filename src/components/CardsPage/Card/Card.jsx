import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.front}>
              <div className={style.front_div}>
                {props.termin}
              </div>
            </div>
            <div className={style.back}>
              <span>{props.definition}</span>
            </div>
        </div>
    );
}

export default Card;