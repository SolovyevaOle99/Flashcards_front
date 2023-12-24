import React from "react";
import img from "../../../img/Section2_image.png";
import style from "./Section2Right.module.css";

const Section2Right = () => {
    return (
        <img  className={style.img} src={img} alt="study_img"/>
    );
}

export default Section2Right;