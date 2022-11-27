import React from "react";
import "../../App.css";
export default function Registation() {
  return (
    <div className="registration">
      <div className="registration">
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
              type="number"
              name="phone"
              placeholder="79197..."
            />
          </li>
          <li>
            <input
              className="contacts_form"
              type="text"
              name="text"
              placeholder="Иные контакты"
            />
          </li>
          <button className="button">Зарегистрироваться</button>
        </ul>
      </div>
    </div>
  );
}
