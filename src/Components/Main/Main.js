import React from "react";
import "../../App.css";

export default function Main() {
    return(
    <div className="container">
        <div className="main-wrap">
            <p className="title">Найди свое приглашение</p>
            <div className="main-cols">
                <div className="maincols-item">
                    <ul>
                        <li className="fact_element">
                            <p className="sales_text">10+</p>
                            <p>шаблонов</p>
                        </li>

                        <li className="fact_element">
                            <p className="sales_text">30%</p>
                            <p>выгода</p>
                        </li>

                        <li className="fact_element">
                            <p className="sales_text">50%</p>
                            <p>экономия времени</p>
                        </li>
                    </ul>
                </div>
                <div className="maincols-item">
                    <div className="sales_image">
                        <img src={require('./content/sales.png')}/>
                    </div>
                </div>
            </div>

            <div className="main-rows">
                <div className="main-rows-item">
                    <p className="main-why_us">Почему мы</p>
                </div>
                <div className="main-rows-item">
                    <p className="man-title-text">Удобно</p>
                    <p className="man-sub-text">Наше приглашение легко создать и отправить</p>
                </div>
                <div className="main-rows-item">
                    <p className="man-title-text">Современно</p>
                    <p className="man-sub-text">Множество шаблонов для ваших приглашений</p>
                </div>
                <div className="main-rows-item">
                    <p className="man-title-text">Экономно</p>
                    <p className="man-sub-text">Не надо тратиться на бумагу</p>
                </div>

            </div>

            <div className="mockup_image">
                <img src={require('./content/mockup.png')} className="mockup_image"/>
            </div>

            <div>
                <p className="how-all-works">Как все работает</p>
                <div className="main-second-rows">
                    <div className="main-second-rows-component">
            
                        <div className="main-second-rows-component">
                            <hr className="main-line" />
                            <div>
                                <p className="man-title-text">РЕГИСТРИРУЕТЕСЬ</p>
                                <p className="man-sub-text">Это необходимо для получения списка гостей</p>
                            </div>
                        </div>

                        <div className="main-second-rows-component">
                            <hr className="main-line" />
                            <div>
                                <p className="man-title-text">ВЫБИРАЕТЕ ШАБЛОН</p>
                                <p className="man-sub-text">В нашей коллекции их больше 10!</p>
                            </div>
                        </div>

                        <div className="main-second-rows-component">
                            <hr className="main-line" />
                            <div>
                                <p className="man-title-text">ДЕЛИТЕСЬ ПРИГЛАШЕНИЕМ</p>
                                <p className="man-sub-text">Теперь можно отправить приглашение</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}