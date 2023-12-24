import React from "react";
import style from "./TerminDefinition.module.css";
import basketImg from "../../../img/basket.svg";
import style2 from "../Termin/Termin.module.css";

const TerminDefinition = (props) => {
  return (
    <section>
      <div className={style.definition}>
        <div className={style.numberDiv}>
          {/* <p className={style.number}>{props.number}</p> */}
          <img src={basketImg} alt="basket" className={style.basket} />
        </div>
        <hr className={style.hr}></hr>
        <div className={style.termin}>
          <div className={style2.div}>
            <input
              onChange={props.onTerm}
              className={style2.input}
              type="text"
              placeholder="Введите термин"
              value={props.newTermin}
            />
            <p className={style2.p}>Термин</p>
          </div>


          <div className={style2.div}>
            <input
              onChange={props.onDefin}
              newDefinition={props.newDefinition}
              className={style2.input}
              type="text"
              placeholder="Введите определение"
            ></input>
            <p className={style2.p}>Определение</p>
          </div>
     
        </div>
      </div>
    </section>
  );
};

export default TerminDefinition;
