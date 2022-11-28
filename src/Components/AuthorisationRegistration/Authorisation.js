import React from "react";

export default function Authorisation() {
  return <div className="registration">
    <div className="registration">
      <p>Авторизация</p>
      <ul>
        <li>
          <input
                className="form"
                type="email"
                name="mail"
                placeholder="EMAIL"
          />

          
        </li>
        <li>
          <input
            className="form"
            type="password"
            name="password"
            placeholder="ПАРОЛЬ"
          />
        </li>
        <li>
          <button className="button">Войти</button>
          <button className="button">Зарегистрироваться</button>
        </li>
      </ul>
    </div>
  </div>;
}
