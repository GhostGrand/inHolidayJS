import React, { useState, useEffect } from "react";
import "../../App.css";

let url = 'http://45.15.159.0/api/template';

export default function Templates() {

    const [items, setItems] = useState([]);

    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        function apiGet() {
            fetch(url, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setItems(json)
            })
        }
        apiGet();
    }, []);

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
                
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <div className="order">
                                <p className="orderName">#{item.id}<br/>{item.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
    )
}