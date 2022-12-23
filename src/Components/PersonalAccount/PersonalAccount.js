import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Rectangle from "./Rectangle 367.png"

let url1 = 'http://45.15.159.0/api/invitation';
let url2 = 'http://45.15.159.0/api/account';

export default function PersonalAccount() {

  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

    useEffect(() => {
        function apiGet1() {
            fetch(url1, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
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
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
              setItems2(json)
          })
      }
      apiGet2();
    }, []);

  return (
    
      <div className = "personalAccount">
        <p className="PAHead">личний кабинет</p>
      
        <div className="MyOrders">
            <p className="MyOrdersHead">Мои заказы</p>

            {items1.map(item => (
              <Link  key={item.id} to={'/infoOrder/{id}'.replace('{id}', item.id)}>
                  <div className="order">
                      <p className="orderName">#{item.id}<br/>{item.name}</p>
                  </div>
              </Link>
            ))}
        </div>
      
        <div  key={items2.id} className="Profile">    
          
          <p className="fio">{items2.name}</p>
          <p className="number">{items2.phoneNumber}</p>
          <p className="mail">{items2.email}</p>
          <p>Иные контакты:</p>
          <p>{items2.otherCommunication}</p>
          {/*<button id="btn1" className="button">Редактировать</button>*/}
        </div>
      </div>
    
  );
}