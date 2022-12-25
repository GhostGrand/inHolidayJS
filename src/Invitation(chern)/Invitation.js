import React, { useState } from "react";
import "../App.css";

let url = 'http://45.15.159.0/api/guest';
let idInvitation = 1;

export default function Registation() {
  const [formValue, setFormValue] = useState({ name: "", phoneNumber: "", idInvitation: idInvitation })

  const [error, setError] = useState(null);
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
        name : formValue.name == "" ? null : formValue.name,
        phoneNumber: formValue.phoneNumber == "" ? null : formValue.phoneNumber,
        idInvitation: formValue.idInvitation
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Данные не прошли валидацию или приглашения с таким ID не существует")
      }
      else if(response.status == 409) {
        setIsError(true)
        setError("Гость с таким номером телефона уже принял данное приглашение")
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
      }
      else {
        setIsError(false)
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
        <p className="header_reg">"СУПЕРПУПЕРСКОЕ ПРИГЛАШЕНИЕ", ИСХОДНЫЙ ШАБЛОН: TEMPLATE666, ID = 1</p>
        <form onSubmit={onSubmit}>
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
            type="number"
            name="phoneNumber"
            placeholder="ТЕЛЕФОН"
            value={formValue.phoneNumber}
            onChange={handleInput}
            />

            <div className="container" style={{display: isError ? 'block' : 'none' }}>
                <div className="main-wrap">
                <div className="error_div">
                    Ошибка: {error}.
                </div>
                </div>
            </div>

            <div className="margin-bottom-logreg">
                <button className="button" type="submit">Я приду!</button>
            </div>
        </form>
      </div>
    </div>
  );
}
