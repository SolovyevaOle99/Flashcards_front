import React from "react";
import style from "./EditOneCard.module.css";
import Menu2 from "../MenuSection2/Menu2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import basketImg from "../../img/basket.svg";
import style3 from "../CreateModulePage/TerminDefinition/TerminDefinition.module.css";
import style4 from "../CreateModulePage/Termin/Termin.module.css";

 
const EditOneCard = () => {

  const state = useLocation().state;
  const [termin, setTermin] = useState(state?.term_name || "");
  const [definition, setDefinition] = useState(state?.term_definition || "");

  // Состояния, отражающие были мы внутри инпутов или нет
  const [terminDirty, setTerminDirty] = useState(false);
  const [definitionDirty, setDefinitionDirty] = useState(false);

  // Состояния, отражающие errors
  const [terminError, setTerminError] = useState("Поле не может быть пустым");
  const [definitionError, setDefinitionError] = useState(
    "Поле не может быть пустым"
  );

  const [formValid, setFormValid] = useState(false);

  //Срабатывает, когда пользователь убрал курсор с поля ввода
  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "termin":
        setTerminDirty(true);
        break;
      case "definition":
        setDefinitionDirty(true);
        break;
    }
  };

  const terminHandler = (e) => {
    setTermin(e.target.value);
    if (!e.target.value) {
      setTerminError("Поле не может быть пустым");
    } else {
      setTerminError("");
    }
  };

  const definitionHandler = (e) => {
    setDefinition(e.target.value);
    if (!e.target.value) {
      setDefinitionError("Поле не может быть пустым");
    } else {
      setDefinitionError("");
    }
  };

  
  useEffect(() => {
    if (terminError || definitionError ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [terminError, definitionError])


  const navigate = useNavigate();

  const location = useLocation();

  const moduleId = location.pathname.split("/")[2];

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/cards/${moduleId}`, {
        term_name: termin,
        term_definition: definition,
      });
      navigate(`/biblioModules`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteCard = async () => {
    try {
      await axios.delete(`/cards/${moduleId}`);
      navigate(`/ModuleView/${state.id_module}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.main_section} ${style.container}`}>
      <Menu2 />
      <section className={style.newR}>
        <div className={style.div1}>
          <p className={style.p}>Редактировать карточку</p>
        </div>

        <div className={style.maindiv}>

          <section className={style.termDef}>
            <div className={style3.definition}>
              <div className={style3.numberDiv}>
                <p className={style.number}>{moduleId || ""}</p>
                <button onClick={handleDeleteCard} className={style.bask}>
                  <img src={basketImg} alt="basket" className={style.basket} />
                </button>
              </div>
              <hr className={style3.hr}></hr>
              <div className={style3.termin}>
                <div className={style4.div}>
                  <input
                    name='termin'
                    onBlur={e => blurHandler(e)}
                    onChange={e => terminHandler(e)}
                    required
                    className={style4.input}
                    type="text"
                    placeholder="Введите термин"
                    value={termin}
                  />

                    {(terminDirty && terminError) && <div className={style.red}>{terminError}</div>}

                  <p className={style4.p}>Термин</p>
                </div>

                <div className={style4.div}>
                  <input
                    name='definition'
                    onBlur={e => blurHandler(e)}
                    onChange={e => definitionHandler(e)}
                    required
                    className={style4.input}
                    type="text"
                    placeholder="Введите определение"
                    value={definition}
                  ></input>

                    {(definitionDirty && definitionError) && <div className={style.red}>{definitionError}</div>}

                  <p className={style4.p}>Определение</p>
                </div>
              </div>
            </div>
          </section>

        </div>
        <div className={style.but}>
          <button  className={style.CreateButton} disabled={!formValid}  onClick={handleClick}>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.active : style.enter
              }
            >
              Создать
            </NavLink>
          </button>
        </div>
      </section>
    </section>
  );
};

export default EditOneCard;
