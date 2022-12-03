import React from "react";
import "../../App.css";
import Rectangle from "./Rectangle 370.jpg"

export default function TemplateOrderForm() {
  return (
      <div className = "orderForm">
        <p className = "orderFormHead">заказ шаблона</p>
        <p className = "orderFormH1">шаблон #1 свадьба</p>
        <div className = "Rectangle">
            <p className = "orderFormH1">введите название:</p>
            <input id = "frm" className="form" type="text" name="name" placeholder="Свадьба228: Много любви (розовой), часть 2." />
            <p className = "orderFormH2">Выбрать дату начала работы приглашения:</p>
            <input id="frmDate" className="form" type="date" name="startDate" />
            <p className="orderFormH3">Выбрать дату окончания работы приглашения:</p>
            <input id="frmDate" className="form" type="date" name="finishDate" />
            <img className="img" src={Rectangle}/>
            <button id="btn" className="button">Заказать</button>
        </div>
      </div>
  );
}