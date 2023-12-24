import React from "react";
import style from "./BiblioModulesPage.module.css";
import img from "../../../img/ProfilePic.png";
import style2 from "../StudyModule/StudyModule.module.css";
import Menu2 from "../../MenuSection2/Menu2";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

const BiblioModules = () => {


  const {currentUser} = useContext(AuthContext);

  const [modules, setModules] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/modules");
        setModules(res.data);
        console.log(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  let moduleMassive = modules.map((module) => (
    currentUser.user_name === module.user_name && (
      <NavLink
      key={module.id_module}
      className={(linkToModule) =>
        linkToModule.isActive ? style.activeLink : style.Link
      }
      to={`/ModuleView/${module.id_module}`}
    >
      <div className={style2.module} key={module.id_module}>
        <div className={style2.row}>
          <p className={style2.number}>{module.count} терминов</p>
          <p className={style2.username}>{module.user_name} </p>
        </div>
        <div className={style.module2}>
          <p className={style2.name}>{module.name_module} </p>
        </div>
      </div>
    </NavLink>
    )
   
  ));


  return (
    <section className={`${style.main_section} ${style.container}`}>
      <Menu2 />
      <section  className={style.newR}>
        <div className={style.profile}>
          <img className={style.icon} src={img} alt="icon" />
          <div className={style.block}>
            <p className={style.user}>User name</p>
            <p className={style.name}>{currentUser?.user_name}</p>
          </div>
        </div>
        <div className={style.modules}>
          <p>Учебные модули</p>
        </div>
        <button className={style.butRegister}>
          <NavLink className={(navData) => navData.isActive ? style.active : style.enter} to="/createModulePage">
            Создать новый модуль
          </NavLink>
        </button>
        <div className={style.modules}>
          {moduleMassive}
        </div>
      </section>
    </section>
  );
};

export default BiblioModules;
