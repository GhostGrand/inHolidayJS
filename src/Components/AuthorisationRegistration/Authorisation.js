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
        <button className="button">Авторизоваться</button>
      </ul>
    </div>
  </div>;
}
