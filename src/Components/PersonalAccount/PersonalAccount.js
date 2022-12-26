import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Rectangle from "./Rectangle 367.png"

let url1 = 'http://45.15.159.0/api/invitation';
let url2 = 'http://45.15.159.0/api/account';

export default function PersonalAccount() {

  const [motivator, setMotivator] = useState(0);

  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    function apiGet1() {
      fetch(url1, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }})
      .then(response => {
        if(response.status == 401) {
          navigate('/auth')
        }
      else {
        return response.json()
      }})
      .then((json) => {
          console.log(json)
          setItems1(json)
      })
    }
    apiGet1();

    function apiGet2() {
      fetch(url2, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
      })
      .then(response => {
        if(response.status == 401) {
          navigate('/auth')
        }
      else {
        return response.json()
      }})
      .then((json) => {
          console.log(json)
          setItems2(json)
          setFormValue({name: json.name, password: null, phoneNumber: json.phoneNumber, otherCommunication: json.otherCommunication})
      })
    }
    apiGet2();

    setMotivator(0);
  }, [motivator]);

  const [isEditing, setIsEditing] = useState(false);

  function handleButtonEdit() {
    setIsEditing(!isEditing)
  }

  const [formValue, setFormValue] = useState({name: "", password: null, phoneNumber: "", otherCommunication: ""})

  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    console.log(formValue);
    fetch(url2, {
      method:"PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name: formValue.name == "" || formValue.name == null ? null : formValue.name,
        password: null,
        phoneNumber: formValue.name == null ? null : formValue.phoneNumber,
        otherCommunication: formValue.name == null ? null : formValue.otherCommunication
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Некорректные данные")
      }
      else if(response.status == 401) {
        setIsError(true)
        setError("Ошибка авторизации (401)")
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
      }
      else {
        setIsError(false)
        setMotivator(1);
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
    
      <div className = "personalAccount container">
        <p className="PAHead">личный кабинет</p>
      
        <div className="MyOrders">
            <p className="MyOrdersHead">Мои заказы</p>

            {items1.map(item => (
              <Link  key={item.id} to={'/infoOrder/{id}'.replace('{id}', item.id)}>
                  <div className="order">
                      <p className="orderName">{item.name}</p>
                  </div>
              </Link>
            ))}
        </div>
      
        <div  key={items2.id} className="Profile">    
          <form onSubmit={onSubmit}>
            <p className="fio" style={{display: isEditing ? 'none' : 'block' }}>{items2.name}</p>
            <input
              className="form"
              type="text"
              name="name" 
              placeholder="ФИО"
              value={formValue.name}
              onChange={handleInput}
              style={{display: isEditing ? 'block' : 'none' }}
            >
            </input>
            <p className="number" style={{display: isEditing ? 'none' : 'block' }}>{items2.phoneNumber}</p>
            <input
              className="form"
              type="number"
              name="phoneNumber"
              placeholder="ТЕЛЕФОН"
              value={formValue.phoneNumber}
              onChange={handleInput}
              style={{display: isEditing ? 'block' : 'none' }}
            >
            </input>
            <p className="mail" style={{display: isEditing ? 'none' : 'block' }}>{items2.email}</p>
            <p>Иные контакты:</p>
            <p style={{display: isEditing ? 'none' : 'block' }}>{items2.otherCommunication}</p>
            <textarea
              className="form_person"
              type="text"
              name="otherCommunication"
              placeholder=""
              maxlength="300"
              value={formValue.otherCommunication}
              onChange={handleInput}
              style={{display: isEditing ? 'block' : 'none' }}
            >
            </textarea>
          
            <div className="container">
              <div className="main-wrap">
                <div className="error_div" style={{display: isError ? 'block' : 'none' }}>
                  Ошибка: {error}.
                </div>
              </div>
            </div>
            
            <button id="btn1" className="button" style={{display: isEditing ? 'block' : 'none' }} type="submit" onClick={handleButtonEdit}>Сохранить</button>
          </form>
          <button id="btn1" className="button" style={{display: isEditing ? 'none' : 'block' }} onClick={handleButtonEdit}>Редактировать</button>
        </div>
      </div>
    
  );
}