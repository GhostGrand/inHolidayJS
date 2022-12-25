import React, { useState, useEffect } from "react";
import "../../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate
} from "react-router-dom";

let url1 = 'http://45.15.159.0/api/template';

export default function TemplateOrderForm() {

  const{id} = useParams();

  const [items, setItems] = useState([]);

    useEffect(() => {
      console.log("АЙДИ:" + id)
        function apiGet() {
            fetch('http://45.15.159.0/api/template/' + id, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setItems(json)
            })
        }
        apiGet();
    }, []);

  const [formValue, setFormValue] = useState({ name:"", startDate:"", finishDate:"", idTemplate:id})

  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    console.log(formValue);
    fetch('http://45.15.159.0/api/invitation', {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        name : formValue.name,
        startDate: formValue.startDate,
        finishDate: formValue.finishDate,
        idTemplate: formValue.idTemplate
      })
    })
    .then(response => {
      if(response.status == 400) {
        setIsError(true)
        setError("Некорректные данные")
      }
      else if(response.status == 401) {
        setIsError(true)
        setError("Что-то не так с серваком (401)")
      }
      else if(response.status == 500) {
        setIsError(true)
        setError("Что-то не так с серваком (500)")
      }
      else {
        setIsError(false)
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
      <div className = "orderForm">
        <p className = "orderFormHead">заказ шаблона</p>        
        <p key={items.id} className = "orderFormH1">"{items.name}"</p>
        <div className = "Rectangle">
          <form onSubmit={onSubmit}>
            <p className = "orderFormH1">введите название:</p>
            <input id = "frm" className="form" type="text" name="name" placeholder="Название" value={formValue.name.value} onChange={handleInput}/>
            <p className = "orderFormH2">Выбрать дату начала работы приглашения:</p>
            <input id="frmDate" className="form" type="date" name="startDate" value={formValue.startDate.value} onChange={handleInput}/>
            <p className="orderFormH3">Выбрать дату окончания работы приглашения:</p>
            <input id="frmDate" className="form" type="date" name="finishDate" value={formValue.finishDate.value} onChange={handleInput}/>
            <img className="img" src={items.previewPath}></img>
            <p className = "orderFormH1">цена: {items.price} руб.</p>
            <div className="container" style={{visibility: isError ? 'visible' : 'hidden' }}>
              <div className="main-wrap">
                <div className="error_div">
                  Ошибка: {error}.
                </div>
              </div>
            </div>
            <button id="btn" className="button" type="submit">Заказать</button>
          </form>
        </div>
      </div>
  );
}