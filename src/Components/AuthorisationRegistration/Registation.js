import React from "react";
import "../../App.css";
export default function Registation() {
  return (
    <div className="container">
      <div className="text-align: center">
        <p>Регистрация</p>
        <ul>
          <li>
            <input className="form" type="text" name="name" placeholder="ФИО" />
            <input
              className="form"
              type="email"
              name="mail"
              placeholder="Email"
            />
            <input
              className="form"
              type="password"
              name="password"
              placeholder="Пароль"
            />
          </li>

          <li>
            <input
              className="form"
              type="phone"
              name="phone"
              placeholder="79197..."
            />
          </li>

          <input
            className="contacts_form"
            type="text"
            name="text"
            placeholder="Иные контакты"
          />

          <button className="button">Зарегистрироваться</button>
        </ul>
      </div>
    </div>
  );
}
