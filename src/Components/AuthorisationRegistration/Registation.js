import React, { useState } from "react";
import "../../App.css";

let url = 'http://45.15.159.0/api/auth/register';

export default function Registation() {
  const [formValue, setFormValue] = useState({ name:"", email:"", password:"", phoneNumber:null, otherCommunication:null })

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

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
        name : formValue.name,
        email: formValue.email,
        password: formValue.password,
        phoneNumber: formValue.phoneNumber == "" ? null : formValue.phoneNumber,
        otherCommunication: formValue.therCommunication == "" ? null : formValue.therCommunication
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Неверно введён номер телефона")
      }
      else if(response.status == 401) {
        setIsError(true)
        setError("Что-то не так с серваком (401)")
      }
      else if(response.status == 403) {
        setIsError(true)
        setError("Вы уже авторизованы")
      } 
      else if(response.status == 409) {
        setIsError(true)
        setError("Пользователь с таким email уже существует")
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
      }
    })
    .then(response => console.log(JSON.stringify(response)))
  }

  function handleInput(event) {
    const {name, value} = event.target;
    setFormValue({...formValue, [name]:value});
    
    console.log(event.target.value);
  }

  return (
    <div className="registration">
      <div className="registration">
        <p className="header_reg">Регистрация</p>
        <form onSubmit={onSubmit}>
          <ul>
            <li>
              <input 
                className="form"
                type="text" 
                name="name" 
                placeholder="ФИО" 
                value={formValue.name.value}
                onChange={handleInput}
              />
              <input
                className="form"
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formValue.email.value}
                onChange={handleInput}
              />
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
              <input
                className="form"
                type="number"
                name="phoneNumber"
                placeholder="ТЕЛЕФОН"
                value={formValue.phoneNumber}
                onChange={handleInput}
              />
            </li>
            <li>
              <input
                className="contacts_form"
                type="text"
                name="otherCommunication"
                placeholder="Иные контакты"
                value={formValue.otherCommunication}
                onChange={handleInput}
              />
            </li>
          </ul>

          <div style={{visibility: isError ? 'visible' : 'hidden' }}>
            Ошибка: {error}.
          </div>
          <button className="button" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
