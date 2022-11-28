import React from "react";
import "../../App.css";
export default function Registation() {
  return (
    <div className="registration">
      <div className="registration">
        <p className="header_reg">Регистрация</p>
        <ul>
          <li>
            <input className="form" type="text" name="name" placeholder="ФИО" />
            <input
              className="form"
              type="email"
              name="mail"
              placeholder="EMAIL"
            />
            <input
              className="form"
              type="password"
              name="password"
              placeholder="ПАРОЛЬ"
            />
          </li>

          <li>
            <input
              className="form"
              type="number"
              name="phone"
              placeholder="79198765422"
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
