import React from "react";
import "../../App.css";
export default function Templates() {
    return(
    <div className="container">
        <div>
            <div className="main-wrap">
                <p className="title">Выбери шаблон на свой вкус!</p>
                <p className="template-sub-text">В нашей коллекции их больше 10!</p>
                <div className="checkbox-row">
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" />
                        <p className="checkbox-sub-text">Свадьбы</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id=""/>
                        <p className="checkbox-sub-text">Дни рождения</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" />
                        <p className="checkbox-sub-text">Корпоративы</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" />
                        <p className="checkbox-sub-text">Праздники</p>
                    </div>
                </div>
                <div className="order">
                    <p className="orderName">#1<br/>свадьба</p>
                </div>

                <div className="order">
                    <p className="orderName">#1<br/>свадьба</p>
                </div>
                <div className="order">
                    <p className="orderName">#1<br/>днюха</p>
                </div>
                <div className="order">
                    <p className="orderName">#1<br/>корпоратив</p>
                </div>
                <div className="order">
                    <p className="orderName">#2<br/>праздники</p>
                </div>
                <div className="order">
                    <p className="orderName">#2<br/>свадьба</p>
                </div>
                <div className="order">
                    <p className="orderName">#3<br/>свадьба</p>
                </div>
                <div className="order">
                    <p className="orderName">#4<br/>свадьба</p>
                </div>
            </div>
        </div>

    </div>
    )
}