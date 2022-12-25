import React from "react";
import "../../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "../Main/Main";
import Help from "../Help/Help";
import Templates from "../Templates/Templates";
import AboutUs from "../AboutUs/AboutUs";
import Authorisation from "../AuthorisationRegistration/Authorisation";
import Registation from "../AuthorisationRegistration/Registation";

export default function Header() {
  return <header>   
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">inholiday</Link>
          <div className="navbar-wrap">
            <ul className="navbar-menu">
              {/*<li><Link to="/info">Как все работает</Link></li>*/}
              <li><Link to="/help">Помощь</Link></li>
              <li><Link to="/templates">Шаблоны</Link></li>
              <li><Link to="/about">О нас</Link></li>
            </ul>
            <Link to= "/auth" className="authreg">Логин</Link>
            <Link to= "/reg" className="authreg">Регистрация</Link>
          </div>
        </div>
      </nav>
  </header>;
}
