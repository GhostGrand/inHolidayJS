import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let url = 'http://45.15.159.0/api/auth/login';

export default function Authorisation() {
  const [formValue, setFormValue] = useState({email:"", password:""})

  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    console.log(formValue);
    fetch(url, {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        email: formValue.email,
        password: formValue.password
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Неверный логин/пароль или пользователь с такими учетными данными не существует")
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
      }
      else {
        setIsError(false)
        navigate('/account')
      }
    })
    .then(response => console.log(JSON.stringify(response)))
  }

  function handleInput(event) {
    const {name, value} = event.target;
    setFormValue({...formValue, [name]:value});
    
    console.log(event.target.value);
  }


  return <div className="registration">
    <form onSubmit={onSubmit}>
      <div className="registration">
        <p>Авторизация</p>
        <ul>
          <li>
            <input
              className="form"
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formValue.email.value}
              onChange={handleInput}
            />
          </li>
          <li>
            <input
              className="form"
              type="password"
              name="password"
              placeholder="ПАРОЛЬ"
              value={formValue.password.value}
              onChange={handleInput}
            />
          </li>
          <li>
          <div className="container">
            <div className="main-wrap">
              <div className="error_div" style={{visibility: isError ? 'visible' : 'hidden' }}>
                Ошибка: {error}.
              </div>
            </div>
          </div>
            <button className="button">Войти</button>
          </li>
        </ul>
      </div>
    </form>
  </div>;
}
