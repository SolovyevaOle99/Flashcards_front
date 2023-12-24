import React from "react";
import style from "./SectionTwoParag.module.css";

const Section_two_parag = (props) => {
  return (
    <div className={style.content}>
      <p>
        {props.post1} <span>{props.word}</span> {props.post2}
      </p>
    </div>
  );
};

export default Section_two_parag;
