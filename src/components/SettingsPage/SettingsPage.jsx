import React from "react";
import style from "../BiblioModulesSection/BiblioModulesPage/BiblioModulesPage.module.css";
import img from "../../img/ProfilePic.png";
import Menu2 from "../MenuSection2/Menu2";
import style2 from "../CreateModulePage/ModuleName/ModuleName.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const SettingsPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState(currentUser?.user_name || "");
  const [name, setName] = useState(currentUser?.name || "");
  const [surname, setSurname] = useState(currentUser?.surname || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [password, setPassword] = useState(currentUser?.password || "");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/users/`, {
        name: name,
        surname: surname,
        email: email,
        user_name: userName,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={`${style.main_section} ${style.container}`}>
      <Menu2 />
      <section className={style.newRow}>
        <div className={style.profile}>
          <img className={style.iconC} src={img} alt="icon" />
        </div>
        <div className={style.divSet}>
          <div className={style2.div}>
            <p>Имя: </p>
            <input
              className={style2.input}
              type="text"
              value={name}
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <p>Фамилия: </p>
            <input
              className={style2.input}
              type="text"
              value={surname}
              placeholder=""
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
          <div>
            <p>Имя пользователя: </p>
            <input
              className={style2.input}
              type="text"
              value={userName}
              placeholder=""
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div>
            <p>Email: </p>
            <input
              className={style2.input}
              type="text"
              value={email}
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <p>Пароль: </p>
            <input
              className={style2.input}
              type="text"
              value={password}
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <button onClick={handleClick} className={style.resButton}>
          <NavLink
            to="/login"
            className={(navData) =>
              navData.isActive ? style.activ : style.ent
            }
          >
            Сохранить изменения и выйти
          </NavLink>
        </button>
      </section>
    </section>
  );
};

export default SettingsPage;
