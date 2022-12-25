import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

export default function InfoOrder() {

  const{id} = useParams();

  const [items, setItems] = useState({});
  const [guests, setGuests] = useState([]);

    useEffect(() => {
      console.log("АЙДИ:" + id)
      function apiGet() {
        fetch('http://45.15.159.0/api/invitation/' + id, {
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
              setGuests(json.guests)
          })}
        apiGet();
    }, []);

  return (
    <div>
      <div key={items.id} className = "personalAccount">
        <p className="PAHead">личный кабинет</p>
        <p className="orderFormH1">приглашение "{items.name}"</p>
        <div className="Rectangle">
          <p className="orderFormH1">Статус: {items.orderStatus}</p>
          <p className="orderFormH1" id="LinkInvitationText">ссылка на приглашение: <a href={items.link}>{items.link}</a></p>
          <a className="LinkInvitation">{items.link}</a>
          <p className="orderFormH1">Список откликнувшихся гостей:</p>

          <div>
            <ol className="list">
              {guests.map(item => (
                <li>
                  {item.name}
                </li>
              ))}
            </ol>
          </div> 
        </div>
      </div>
    </div>
  );
}