import React from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return (          
    <div className='footerbar'>
        <div className='container'>
            <div className='footer-wrap'>
                <ul className='footerbar-menu'>
                    <li><Link to="/" className="navbar-brand">inholiday</Link></li>
                    <li><a className='footer-li' href="">Все права принадлежат четырем студентам ПрИн-367 и ВолгГТУ</a></li>
                    <li><a className='footer-li' href="">+79655586211</a></li>
                    <li><a className='footer-li' href=""></a></li>
                </ul>
                <ul className='footerbar-menu'>
                    <li><a href="#" className="navbar-brand">Продукт</a></li>
                    <li><Link to="/account" className='footer-li'>Личный кабинет</Link></li>
                    <li><Link to="/templates" className='footer-li'>Шаблоны</Link></li>
                    <li><a className='footer-li' href="">Индивидуальное приглашение</a></li>
                </ul>
                <ul className='footerbar-menu'>
                    <li><a href="#" className="navbar-brand">Проект</a></li>
                    <li><Link to="/#how" hash="#how" className='footer-li'>Как все работает</Link></li>
                    <li><Link to="/about"className='footer-li'>О нас</Link></li>
                    <li><a className='footer-li' href="">Главный баннер</a></li>
                </ul>                  
            </div>
        </div>
    </div>
  )
}
