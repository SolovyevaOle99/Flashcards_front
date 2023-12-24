import React from "react";
import style from "./CardsPage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import Menu1 from "../MenuSection1/Menu/Menu";
import style2 from "../CardsPage/Card/Card.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";

const ModuleView = () => {
  const [cards, setCards] = useState([]);

  const location = useLocation();

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const moduleId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/modules/${moduleId}`);
        setCards(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [moduleId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/modules/${moduleId}`);
      navigate("/AllModules");
    } catch (err) {
      console.log(err);
    }
  };

  let cardsData = cards.map(
    (card) =>
      card.term_name !== null && (
        <div className={style.d}>
          {currentUser ? (
            currentUser.user_name === card.user_name && (
              <button className={style.butEditCard}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.enter
                  }
                  key={card.id_card}
                  to={`/EditOneCard/${card.id_card}`}
                  state={card}
                >
                  Редактировать
                </NavLink>
              </button>
            )
          ) : (
            <p></p>
          )}
          <div className={style2.card} key={card.id_card}>
            <div className={style2.front}>
              <div className={style2.front_div} key={card.id_card}>
                {card.term_name}
              </div>
            </div>
            <div className={style2.back}>
              <div className={style2.back_div} key={card.id_card}>
                {card.term_definition}
              </div>
            </div>
          </div>
        </div>
      )
  );

  let buttAdd = cards.map((card) => (
    <button className={style.addButton}>
      <NavLink
        to={`/AddCreateCardsPage/${card.id_module}`}
        state={card}
        className={(navData) => (navData.isActive ? style.activ : style.ent)}
      >
        Добавить новую карточку
      </NavLink>
    </button>
  ));

  let mod = cards.map((c) => (
    <div className={style.modules} key={c.id_module}>
      <p className={style.inf}>{c.user_name}</p>
      <p className={style.inf}>{c.name_module}</p>
      <p className={style.inf}>{c.description}</p>
      {currentUser ? (
        currentUser.user_name === c.user_name && (
          <div className={style.buttons}>
            <button className={style.butEdit}>
              <NavLink
                to={`/createModulePage/${c.id_module}`}
                state={c}
                className={(navData) =>
                  navData.isActive ? style.active : style.enter
                }
              >
                Редактировать
              </NavLink>
            </button>
            <button onClick={handleDelete} className={style.but1}>
              Удалить
            </button>
          </div>
        )
      ) : (
        <p></p>
      )}
    </div>
  ));

  return (
    <section className={`${style.main_section} ${style.container}`}>
      {currentUser ? <Menu2 /> : <Menu1 />}
      <section className={style.newR}>
        {mod[0]}

        <hr className={style.hr}></hr>
        <div className={style.cards}>{cardsData}</div>
        {currentUser ? (
          <div className={style.butAddStyle}>{buttAdd[0]}</div>
        ) : (
          <p></p>
        )}
      </section>
    </section>
  );
};

export default ModuleView;
