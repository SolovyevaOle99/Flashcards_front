import React from "react";
import style from "../BiblioModulesSection/BiblioModulesPage/BiblioModulesPage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import Menu1 from "../MenuSection1/Menu/Menu";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState, useContext } from "react";
import styleSearch from "../MenuSection1/Search/Search.module.css";
import axios from "axios";
import style2 from "../BiblioModulesSection/StudyModule/StudyModule.module.css";
import { AuthContext } from "../../context/authContext.js";

const AllModules = () => { 
  
  const [modules, setModules] = useState([]);

  const [quer, setQuer] = useState("");

  const { currentUser } = useContext(AuthContext);

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

  const search = (modules) => {
    return modules.filter(
      (module) =>
        module.name_module.toLowerCase().includes(quer) ||
        module.user_name.toLowerCase().includes(quer)
    );
  };

  let moduleMassive = search(modules).map((module) => (
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
  ));

  return (
    <section  className={`${style.main_section} ${style.container}`}>
      {currentUser ? <Menu2 /> : <Menu1 />}
      <section className={style.newR}>
        <div className={style.modules}>
          <p>Учебные модули</p>
        </div>
        {currentUser ? (
          <div>
            <button className={style.butRegister}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? style.active : style.enter
                }
                to="/createModulePage"
              >
                Создать новый модуль
              </NavLink>
            </button>
            <p>
              <input
                className={styleSearch.Search_text}
                type="text"
                placeholder="Поиск по модулям"
                onChange={(e) => setQuer(e.target.value)}
              ></input>
            </p>
          </div>
        ) : (
          <p>
            <input
              className={styleSearch.Search_text}
              type="text"
              placeholder="Поиск по модулям"
              onChange={(e) => setQuer(e.target.value)}
            ></input>
          </p>
        )}

        <div className={style.modules}>{moduleMassive}</div>
      </section>
    </section>
  );
};

export default AllModules;
