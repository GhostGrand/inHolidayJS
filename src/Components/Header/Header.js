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

  const [items, setItems] = useState([]);

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem('isAuth'))
    console.log("header useEffect " + isAuth)
  });

  function apiGet() {
      fetch(url, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdEB0ZXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVU0VSIiwibmJmIjoxNjcxODIwOTE0LCJleHAiOjE3MDMzNTY5MTQsImlzcyI6ImluSG9saWRheVNlcnZlciIsImF1ZCI6ImluSG9saWRheUNsaWVudCJ9.WPuU54w3IeA0LZQq6Z35SYsz7lCzEQXXJplU6BrWe4E'
          }
      })
      .then(response => {
        if(response.status == 200) {
          localStorage.setItem('isAuth', false)
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
            <Link to= "" className="authreg" style={{visibility: isAuth ? 'visible' : 'hidden' }} onClick={apiGet}>Выход</Link>
          </div>
        </div>
      </nav>
  </header>;
}
