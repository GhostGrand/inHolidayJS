import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import isAuth, { setIsAuth } from '../Header/Header'

let url = 'http://45.15.159.0/api/auth/register';

export default function Registation() {
  const [formValue, setFormValue] = useState({ name:"", email:"", password:"", phoneNumber:null, otherCommunication:null })

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
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVU0VSIiwibmJmIjoxNjcxODIwOTE0LCJleHAiOjE3MDMzNTY5MTQsImlzcyI6ImluSG9saWRheVNlcnZlciIsImF1ZCI6ImluSG9saWRheUNsaWVudCJ9.WPuU54w3IeA0LZQq6Z35SYsz7lCzEQXXJplU6BrWe4E'
      },
      body: JSON.stringify({ 
        name : formValue.name,
        email: formValue.email,
        password: formValue.password,
        phoneNumber: formValue.phoneNumber == "" ? null : formValue.phoneNumber,
        otherCommunication: formValue.otherCommunication == "" ? null : formValue.otherCommunication
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Некорректные данные")
        localStorage.setItem('isAuth', true)
      }
      else if(response.status == 401) {
        setIsError(true)
        setError("Что-то не так с серваком (401)")
        localStorage.setItem('isAuth', true)
      }
      else if(response.status == 403) {
        setIsError(true)
        setError("Вы уже авторизованы")
      } 
      else if(response.status == 409) {
        setIsError(true)
        setError("Пользователь с таким email уже существует")
        localStorage.setItem('isAuth', true)
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
        localStorage.setItem('isAuth', true)
      }
      else {
        setIsError(false)
        localStorage.setItem('isAuth', false)
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

          <div className="container">
            <div className="main-wrap">
              <div className="error_div" style={{visibility: isError ? 'visible' : 'hidden' }}>
                Ошибка: {error}.
              </div>
            </div>
          </div>
          <button className="button" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}
