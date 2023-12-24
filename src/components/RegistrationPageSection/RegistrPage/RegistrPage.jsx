import React from "react";
import regStyle from "./RegistrPage.module.css";
import Menu from "../../MenuSection1/Menu/Menu";
import style from "../RegistrationInput/RegistrationInput.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrPage = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");

  // Состояния, отражающие были мы внутри инпутов или нет
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [usernameDirty, setUsernameDirty] = useState(false);


  // Состояния, отражающие errors
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [surnameError, setSurnameError] = useState('Фамилия не может быть пустым');
  const [usernameError, setUsernameError] = useState('Имя пользователя не может быть пустым');

  const [formValid, setFormValid] = useState(false)
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (emailError || passwordError || nameError || surnameError || usernameError || err) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [emailError, passwordError, nameError, surnameError, usernameError, err])

  

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
      case 'name':
        setNameDirty(true)
        break
      case 'surname':
        setSurnameDirty(true)
        break
      case 'username':
        setUsernameDirty(true)
        break
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный емайл")
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


  const namedHandler = (e) => {
    setName(e.target.value)

    if (!e.target.value) {
      setNameError("Имя не может быть пустым")
    }
    else {
      setNameError("")
    }
  }

  
  const surnamedHandler = (e) => {
    setSurname(e.target.value)

    if (!e.target.value) {
      setSurnameError("Фамилия не может быть пустой")
    }
    else {
      setSurnameError("")
    }
  }

  const usernameHandler = (e) => {
    setUsername(e.target.value)

    if (!e.target.value) {
      setUsernameError("Имя пользователя не может быть пустым")
    }
    else {
      setUsernameError("")
    }
  }


  const handleSubmit = async e => {

    e.preventDefault()
    try{

      await axios.post("auth/register", {
        name: name,
        surname: surname,
        email: email,
        user_name: username,
        password: password
      })
      navigate("/login")
    }catch(err){

      setError(err.response.data)
    }
    
  }



  return (
    <section>
      <Menu />
      <section className={`${regStyle.container} ${regStyle.photo}`}>
        <div className={regStyle.blue}>
          <div className={regStyle.black}>
            <p className={regStyle.enter}>Зарегистрироваться</p>
            <div className={regStyle.inputs}>
     
              <div>
                <div className={style.div}>
                  <p className={style.p}>Эл.почта</p>

                  {(emailDirty && emailError) && <div className={regStyle.red}>{emailError}</div>}

                  <input
                    onBlur={e => blurHandler(e)}
                    name = "email"
                    value={email}
                    onChange={e => emailHandler(e)}
                    required
                    className={style.input}
                    type="text"
                    placeholder="Введите электронный адрес"
                  ></input>
                </div>

                

                <div className={style.div}>
                  <p className={style.p}>Имя</p>

                  {(nameDirty&& nameError) && <div className={regStyle.red}>{nameError}</div>}
                  <input
                   onBlur={e => blurHandler(e)}
                    name="name"
                    value={name}
                    onChange={e => namedHandler(e)}
                    required
                    className={style.input}
                    type="text"
                    placeholder="Введите имя"
                  ></input>
                </div>

                

                <div className={style.div}>
                  <p className={style.p}>Фамилия</p>

                  {(surnameDirty && surnameError) && <div className={regStyle.red}>{surnameError}</div>}

                  <input
                   onBlur={e => blurHandler(e)}
                    name="surname"
                    value={surname}
                    onChange={e => surnamedHandler(e)}
                    required
                    className={style.input}
                    type="text"
                    placeholder="Введите фамилию"
                  ></input>
                </div>

               

                <div className={style.div}>
                  <p className={style.p}>Имя пользователя</p>

                  {(usernameDirty && usernameError) && <div className={regStyle.red}>{usernameError}</div>}

                  <input
                   onBlur={e => blurHandler(e)}
                    name = "username"
                    value={username}
                    onChange={e => usernameHandler(e)}
                    required
                    className={style.input}
                    type="text"
                    placeholder="Введите имя пользователя"
                  ></input>
                </div>

               
                <div className={style.div}>
                  <p className={style.p}>Пароль</p>

                  {(passwordDirty&& passwordError) && <div className={regStyle.red}>{passwordError}</div>}

                  <input
                   onBlur={e => blurHandler(e)}
                    name = "password"
                    value={password}
                    onChange={e => passwordHandler(e)}
                    required
                    className={style.input}
                    type="password"
                    placeholder="Введите пароль"
                  ></input>
                </div>

              </div>
            </div>
            
            <button disabled={!formValid} onClick={handleSubmit} className={regStyle.Button_registr}>
             
                Зарегистрироваться
          
            </button> 
           {err && <p className={regStyle.err}>{err}</p> }
          </div>
        </div>
      </section>
    </section>
  );
};
// className={style.err}

export default RegistrPage;
