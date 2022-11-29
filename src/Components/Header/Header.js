import React from "react";
import "../../App.css";

export default function Header() {
  return <header>
    {/* <div className="header__container _container">
      <a href=""><b>inholiday</b></a>
      <nav className="header__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="">как все работает</a>
          </li>
          <li className="menu__item">
            <a href="">помощь</a>
          </li>
          <li className="menu__item">
            <a href="">шаблоны</a>
          </li>
          <li className="menu__item">
            <a href="">о нас</a>
          </li>
          <li>
          <button className="menu__button">Зарегистрироваться</button>
          </li>
        </ul>
        
      </nav>
    </div> */}
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-brand">inholiday</a>
        <div className="navbar-wrap">
          <ul className="navbar-menu">
            <li><a href="#">Как все работает</a></li>
            <li><a href="#">Помощь</a></li>
            <li><a href="#">Шаблоны</a></li>
            <li><a href="#">О нас</a></li>
            
          </ul>
          <a className="authreg">Логин|Регистрация</a>
        </div>
        
      </div>
    </nav>
    
  </header>;
}
