import React from "react";
import style from "./Menu2.module.css";
import { NavLink } from "react-router-dom";
import Header from "../MenuSection1/Header/Header";
import app from "../../App.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu2 = () => {

  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
 
  return (
    <section className={`${app.main_section} ${app.container}`}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <div className={app.nav_menu}>
        <Header />
        <nav>
          <ul className={
              nav ? [style.items, style.active].join(' ') : [style.items]}>
            <li className={style.link}> 
              <NavLink
                to="/biblioModules"
                className={(navData) =>
                  navData.isActive ? style.active : style.link
                }
              >
                Профиль
              </NavLink>
            </li>
            <li className={style.link}>
              <NavLink
                to="/AllModules"
                className={(navData) =>
                  navData.isActive ? style.active : style.link
                }
              >
                Библиотека модулей
              </NavLink>
            </li>
            <li>
              <button className={style.CreateButton}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? style.active : style.enter
                  }
                  to={`/CreateModulePage`}
                >
                  Создать
                </NavLink>
              </button>
            </li>
            <li>
              <Dropdown selected={selected} setSelected={setSelected}/>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)}  className={style.mobile}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Menu2;
