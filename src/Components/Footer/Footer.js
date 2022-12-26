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
                    <li className='footer-li'>Все права принадлежат четырем студентам ПрИн-367 и ВолгГТУ</li>
                    <li className='footer-li'>+79655586211</li>
                    <li><a className='footer-li' href=""></a></li>
                </ul>
                <ul className='footerbar-menu'>
                    <li className="navbar-brand">Продукт</li>
                    <li><Link to="/account" className='footer-li'>Личный кабинет</Link></li>
                    <li><Link to="/templates" className='footer-li'>Шаблоны</Link></li>
                    <li><Link className='footer-li' href="" to={'/order/{id}'.replace('{id}', 10)}>Своё приглашение</Link></li>
                </ul>
                <ul className='footerbar-menu'>
                    <li className="navbar-brand">Проект</li>
                    <li><Link to="/#how" hash="#how" className='footer-li'>Как все работает</Link></li>
                    <li><Link to="/about"className='footer-li'>О нас</Link></li>
                    {/* <li><a className='footer-li' href="">Главный баннер</a></li> */}
                </ul>                  
            </div>
        </div>
    </div>
  )
}
