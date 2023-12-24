import React from "react";
import style from "./EnterPage.module.css";
import styleR from "../EnterInput/EnterInput.module.css";
import Menu from "../../MenuSection1/Menu/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authContext.js";

const Enter_page = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Состояния, отражающие были мы внутри инпутов или нет
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  // Состояния, отражающие errors
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [formValid, setFormValid] = useState(false)

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);


   //Срабатывает, когда пользователь убрал курсор с поля ввода
   const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch(e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      
    }
  }

  
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный емайл")
      if (!e.target.value) {
        setEmailError("Емейл не может быть пустым")
      }
    }
    else {
      setEmailError("")
    }
  } 

  
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен быть не менее 3х и не более 8 символов")
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым")
      }
    }
    else {
      setPasswordError("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        email: email,
        password: password
      })
      navigate("/biblioModules");
    } catch (err) {
      setError(err.response.data);
    }
  };

  useEffect(() => {
    if (emailError || passwordError ||  err) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [emailError, passwordError, err])


  return (
    <section>
      <Menu />
      <section className={`${style.container} ${style.photo}`}>
        <div className={style.blue}>
          <div className={style.black}>
            <p className={style.enter}>Вход</p>
            <div className={style.inputs}>
              <div className={styleR.div}>
                <p className={styleR.p}>эл.почта</p>

                {(emailDirty && emailError) && <div className={styleR.red}>{emailError}</div>}

                <input
                  onBlur={e => blurHandler(e)}
                  value={email}
                  onChange={e => emailHandler(e)}
                  name = "email"
                  className={styleR.input}
                  type="text"
                  placeholder="Введите электронный адрес"
                  required
                ></input>
              </div>
              <div className={styleR.div}>
                <p className={styleR.p}>пароль</p>
                {(passwordDirty&& passwordError) && <div className={styleR.red}>{passwordError}</div>}
                <input
                  onBlur={e => blurHandler(e)}
                  value={password}
                  onChange={e => passwordHandler(e)}
                  name = "password"
                  className={styleR.input}
                  type="password"
                  placeholder="Введите пароль"
                  required
                ></input>
              </div>
            </div>
            <button  disabled={!formValid} onClick={handleSubmit} className={style.but}>Войти</button>
          </div>
          {err && <p  className={styleR.err}>{err}</p>}
        </div>
      </section>
    </section>
  );
};

export default Enter_page;
