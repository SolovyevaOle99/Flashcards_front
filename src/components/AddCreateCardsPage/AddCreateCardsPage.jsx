import React from "react";
import style from "../CreateModulePage/CreateModulePage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style3 from "../CreateModulePage/TerminDefinition/TerminDefinition.module.css";
import style4 from "../CreateModulePage/Termin/Termin.module.css";

const AddCreateCardsPage = (props) => {

  const navigate = useNavigate();

  const [termin, setTermin] = useState("");
  const [definition, setDefinition] = useState("");

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
    if (terminError|| definitionError ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [terminError, definitionError])



  const location = useLocation();

  const moduleId = location.pathname.split("/")[2];

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/cards/${moduleId}`, {
        term_name: termin,
        term_definition: definition,
      });
      navigate(`/ModuleView/${moduleId}`);
  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.main_section} ${style.container}`}>
      <Menu2 />
      <section className={style.newR}>
        <div className={style.div1}>
          <p className={style.p}>Создать новый термин</p>
        </div>
        <div className={style.maindiv}>
          <section  className={style.termDef}>
            <div className={style3.definition}>
              <div className={style3.numberDiv}>
              </div>
              {/* <hr className={style3.hr}></hr> */}
              <div className={style3.termin}>
                <div className={style4.div}>
                  <input 
                    className={style4.input}
                    type="text"
                    placeholder="Введите термин"
                    value={termin}
                    name='termin'
                    onBlur={e => blurHandler(e)}
                    onChange={e => terminHandler(e)}
                    required
                  />
                   {(terminDirty && terminError) && <div className={style.red}>{terminError}</div>}

                  <p className={style4.p}>Термин</p>
                </div>

                <div className={style4.div}>
                  <input
                    onChange={e => definitionHandler(e)}
                    onBlur={e => blurHandler(e)}
                    className={style4.input}
                    name='definition'
                    type="text"
                    placeholder="Введите определение"
                    value={definition}
                    required
                  ></input>

                    {(definitionDirty && definitionError) && <div className={style.red}>{definitionError}</div>}

                  <p className={style4.p}>Определение</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={style.but}>
          <button className={style.CreateButton}  disabled={!formValid} onClick={handleClick}>
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

export default AddCreateCardsPage;
