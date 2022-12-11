import React, { useState } from "react";
import "../../App.css";

let url = 'http://45.15.159.0/api/auth/register';

export default function Registation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otherCommunication, setOtherCommunication] = useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function onSubmit(event) {
    fetch(url, {method:'POST',
        name: name,
        email: email, 
        password: password,
        phoneNumber: phoneNumber,
        otherCommunication: otherCommunication
       })
    .then(response => {
      if(response.status == 200) {
        response.json()
      }
      else {
        response.json()
      }
    })
    /*.then(
      (result) => {
        if(response.status)
      }
    )*/;
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
              value={name.value} // мб valueOf
              onChange={setName}
            />
            <input
              className="form"
              type="email"
              name="mail"
              placeholder="EMAIL"
              value={email.value}
              onChange={setEmail}
            />
            <input
              className="form"
              type="password"
              name="password"
              placeholder="ПАРОЛЬ"
              value={password.value}
              onChange={setPassword}
            />
          </li>

          <li>
            <input
              className="form"
              type="number"
              name="phone"
              placeholder="ТЕЛЕФОН"
              value={phoneNumber.value}
              onChange={setPhoneNumber}
            />
          </li>
          <li>
            <input
              className="contacts_form"
              type="text"
              name="text"
              placeholder="Иные контакты"
              value={otherCommunication.value}
              onChange={setOtherCommunication}
            />
          </li>
          <button className="button" type="submit">Зарегистрироваться</button>
        </ul>
        </form>
        <div visibility={false}>
          {/*Ошибка {error.message}*/}
        </div>


      </div>
    </div>
  );
}
