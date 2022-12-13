import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

export default function InfoOrder() {

  const{id} = useParams();

  const [item, setItem] = useState();

    useEffect(() => {
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
                setItem(json)
            })
        }
        apiGet();
    }, []);

  return (
    <div>
      {item => ( 
        <div key={item.id} className = "personalAccount">
          <p className="PAHead">личный кабинет</p>
          <p className="orderFormH1">приглашение #{item.id} {item.name}</p>
          <div className="Rectangle">
              <p className="orderFormH1">Статус: {item.orderStatus}</p>
              <p className="orderFormH1" id="LinkInvitationText">ссылка на приглашение: </p>
              <a className="LinkInvitation">{item.link}</a>
              <p className="orderFormH1">Список откликнувшихся гостей</p>
              <ol className="list">
                {item.guests.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
                {/*
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Зурбадулина зульфия раджешовна</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Зурбадулина зульфия раджешовна</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Зурбадулина зульфия раджешовна</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                <li>Артемов Артем артемович</li>
                <li>Невский Лев Викторович</li>
                */}
              </ol>
          </div>
        </div>
      )}
    </div>
  );
}