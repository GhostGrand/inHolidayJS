import React, { useState, useEffect } from "react";
import "../../App.css";
import {
  BrowserRouter as Router,
  useNavigate,
  Link
} from "react-router-dom";

let url = 'http://45.15.159.0/api/auth/logout';

export default function Header() {

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState("");

  useEffect(() => {
    if(localStorage.getItem('isAuth') == "false") {
      localStorage.setItem('isAuth', "")
    }

    setIsAuth(localStorage.getItem('isAuth'))
    console.log("header useEffect " + isAuth)

    return () => localStorage.setItem('isAuth', isAuth)
  },  []);

  function apiGet() {
      fetch(url, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
        if(response.status == 200) {
          localStorage.setItem('isAuth', "")
          console.log("localStorage" + localStorage.getItem('isAuth'))
          navigate('/')
        }})
      .then(response => console.log(JSON.stringify(response)))
  }

  return <header>   
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="main-brand" onClick={() => (console.log("localStorage" + localStorage.getItem('isAuth')))}>inholiday</Link>
          <div className="navbar-wrap">
            <ul className="navbar-menu">
              {/*<li><Link to="/info">Как все работает</Link></li>*/}
              <li><Link to="/help">Помощь</Link></li>
              <li><Link to="/templates">Шаблоны</Link></li>
              <li><Link to="/about">О нас</Link></li>
            </ul>
            <Link to= "/auth" className="authreg" style={{visibility: isAuth ? 'hidden' : 'visible' }}>Логин</Link>
            <Link to= "/reg" className="authreg" style={{visibility: isAuth ? 'hidden' : 'visible' }}>Регистрация</Link>
            <Link className="authreg" style={{visibility: isAuth ? 'visible' : 'hidden' }} onClick={apiGet}>Выход</Link>
          </div>
        </div>
      </nav>
  </header>;
}
