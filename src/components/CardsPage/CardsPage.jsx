import React from "react";
import style from "./CardsPage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import Card from "./Card/Card";

const CardsPage = (props) => {

  

  let cardsData = props.cardsData.map((card) => (
    <Card termin={card.termin} definition={card.definition} />
  ));
  let moduleName = props.moduleName[0].nameMod;

  return (
    <section className={style.container}>
      {/* <Menu2 />
      <section className={style.main_section}>
        <div className={style.modules}>
          <p>{moduleName}</p>
        </div>
        <hr className={style.hr}></hr>
        <div className={style.cards}>
            {cardsData}
        </div>
      </section> */}
    </section>
  );
};

export default CardsPage;
