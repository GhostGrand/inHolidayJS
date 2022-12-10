import React from 'react'

export default function Footer() {
  return (
    <div className='footerbar'>
        <div className='container'>
            <div className='footer-wrap'>
                <ul className='footerbar-menu'>
                    <li><a href="#" className="navbar-brand">inholiday</a></li>
                    <li><a className='footer-li' href="">Все права принадлежат четырем студентам ПрИн-367 и ВолгГТУ</a></li>
                    <li><a className='footer-li' href="">+79655586211</a></li>
                    <li><a className='footer-li' href=""></a></li>
                </ul>

                <ul className='footerbar-menu'>
                    <li><a href="#" className="navbar-brand">Продукт</a></li>
                    <li><a className='footer-li' href="">Личный кабинет</a></li>
                    <li><a className='footer-li' href="">Шаблоны</a></li>
                    <li><a className='footer-li' href="">Индивидуальное приглашение</a></li>
                </ul>

                <ul className='footerbar-menu'>
                    <li><a href="#" className="navbar-brand">Проект</a></li>
                    <li><a className='footer-li' href="">Как все работает</a></li>
                    <li><a className='footer-li' href="">О нас</a></li>
                    <li><a className='footer-li' href="">Главный баннер</a></li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
