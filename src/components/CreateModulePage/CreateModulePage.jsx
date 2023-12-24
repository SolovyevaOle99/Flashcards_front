import React from "react";
import style from "./CreateModulePage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import {  useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style2 from "../CreateModulePage/ModuleName/ModuleName.module.css";


const CreateModulePage = (props) => {

  const navigate = useNavigate();

  const state = useLocation().state;
  const [moduleName, setModuleName] = useState(state?.name_module || "");
  const [description, setDescription] = useState(state?.description || "");

  // Состояния, отражающие были мы внутри инпутов или нет
  const [moduleNameDirty, setmoduleNameDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);

  // Состояния, отражающие errors
  const [moduleNameError, setModuleNameError] = useState('Поле не может быть пустым');
  const [descriptionError, setDescriptionError] = useState('Поле не может быть пустым');

  const [formValid, setFormValid] = useState(false)

     //Срабатывает, когда пользователь убрал курсор с поля ввода
  const blurHandler = (e) => {
      // eslint-disable-next-line default-case
    switch(e.target.name) {
      case 'description':
        setDescriptionDirty(true)
        break
      case 'moduleName':
        setmoduleNameDirty(true)
        break
        
    }
  }

  const moduleNameHandler = (e) => {
    setModuleName(e.target.value)
   if (!e.target.value) {
        setModuleNameError("Поле не может быть пустым")
    }
    else {
      setModuleNameError("")
    }
  }

  const descriptionHandler = (e) => {
    setDescription(e.target.value)
   if (!e.target.value) {
        setDescriptionError("Поле не может быть пустым")
    }
    else {
      setDescriptionError("")
    }
  }

  useEffect(() => {
    if (moduleNameError || descriptionError ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [moduleNameError, descriptionError])



  const handleClick = async (e) => {
    e.preventDefault();

    try {
      state
        ? await axios.put(`/modules/${state.id_module}`, {
            name_module: moduleName,
            description: description,
          })
        : await axios.post(`/modules/`, {
            name_module: moduleName,
            description: description,
          });
          navigate("/AllModules");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <section className={`${style.main_section} ${style.container}`}>
      <Menu2 />
      <section className={style.newR}>
        <div className={style.div1}>
          <p className={style.p}>Создать / редактировать учебный модуль</p>
        </div>
        <div className={style.div2}>
          <div className={style2.div}>
            <input
              name='moduleName'
              onBlur={e => blurHandler(e)}
              className={style2.input}
              type="text"
              value={moduleName}
              placeholder="Введите название модуля"
              onChange={e => moduleNameHandler(e)}
              required
            ></input>

             {(moduleNameDirty && moduleNameError) && <div className={style.red}>{moduleNameError}</div>}

            <p className={style2.p}>Название</p>
          </div>
          <div className={style2.div}>
            <input
              name='description'
              onBlur={e => blurHandler(e)}
              className={style2.input}
              type="text"
              value={description}
              placeholder="Введите описание модуля"
              onChange={e => descriptionHandler(e)}
            ></input>

            {(descriptionDirty && descriptionError) && <div className={style.red}>{descriptionError}</div>}

            <p className={style2.p}>Описание</p>
          </div>
        </div>
 
        <div className={style.but}>
          <button  disabled={!formValid} className={style.CreateButton} onClick={handleClick}>
              Создать
          </button>
        </div>
      </section>
    </section>
  );
};

export default CreateModulePage;
