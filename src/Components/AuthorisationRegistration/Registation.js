import React, { useState } from "react";
import "../../App.css";

let url = 'http://45.15.159.0/api/auth/register';

export default function Registation() {
  const [formValue, setFormValue] = useState({ name:"", email:"", password:"", phoneNumber:null, otherCommunication:null })

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
        phoneNumber: formValue.phoneNumber,
        otherCommunication: formValue.therCommunication
      })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))

    /*.then(response => {
      if(response.status == 200) {
        response.json()
      }
      else {
        response.json()
      }
    })*/
    /*.then(
      (result) => {
        if(response.status)
      }
    )*/;
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
              name="phone"
              placeholder="ТЕЛЕФОН"
              value={formValue.phoneNumber == null ? "" : formValue.phoneNumber.value}
              onChange={handleInput}
            />
          </li>
          <li>
            <input
              className="contacts_form"
              type="text"
              name="text"
              placeholder="Иные контакты"
              value={formValue.otherCommunication == null ? "" : formValue.otherCommunication.value}
              onChange={handleInput}
            />
          </li>
          <button className="button" type="submit">Зарегистрироваться</button>
        </ul>
        </form>
        {/*<div visibility={false}>
          Ошибка {error.message}
        </div>*/}


      </div>
    </div>
  );
}
