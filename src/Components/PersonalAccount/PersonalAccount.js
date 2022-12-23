import React from "react";
import "../../App.css";
import Rectangle from "./Rectangle 367.png"

export default function PersonalAccount() {
  return (
    // <div className="container">
      <div className = "personalAccount">
        <p className="PAHead">личний кабинет</p>
      
        <div className="MyOrders">
            <p className="MyOrdersHead">Мои заказы</p>
            <div className="order">
              <p className="orderName">#1<br/>свадьбаe fd grgehet  rge</p>
            </div>
            <div className="order">
              <p className="orderName">#2<br/>свадьба ghkvbkhbkbk</p>
            </div>
            <div className="order">
              <p className="orderName">#3<br/>свадьба</p>
            </div>
            <div className="space"></div>
        </div>
      
        <div className="Profile">
            {/* <img src = {Rectangle}/> */}
            <p className="fio">Пушкин </p>
            <p className="number">+88005553535</p>
            <p className="mail">Kurisumkaise0@yandex.ru</p>
            <p>Иные контакты:</p>
            <p>vk.com/soidfjsodifjsd</p>
            <p>tg.com/odifjosdijfsodif</p>
            <button id="btn1" className="button">Редактировать</button>
        </div>
      </div>
    // </div>
  );
}