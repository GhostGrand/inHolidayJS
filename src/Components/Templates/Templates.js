import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

let url = 'http://45.15.159.0/api/template';

export default function Templates() {

    const [items, setItems] = useState([]);

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
                console.log(items)
                setCurrentItems(json)
            })
            
        }
        apiGet();
        console.log(items)
    }, []);

    const [currentItems, setCurrentItems] = useState([]);

    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(true)
    );
        
    function handleOnChange(position) {

        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    
        let array = [];
        
        console.log(currentItems)
        
        if (updatedCheckedState[0]) {
            console.log("merrigies")
            array = array.concat(items.filter(item => item.event.name == "marriage"))
        }
        if (updatedCheckedState[1]) {
            console.log("birthdays")
            array = array.concat(items.filter(item => item.event.name == "birthday"))
        }
        if (updatedCheckedState[2]) {
            console.log("corporatives")
            array = array.concat(items.filter(item => item.event.name == "corporative"))
        }
        if (updatedCheckedState[3]) {
            console.log("other")
            array = array.concat(items.filter(item => item.event.name == "other"))
        }   
        setCurrentItems(array)
    };

    const whiteBack = `rgba(255, 255, 255, 0.5)`;


    return(
    <div className="container">
        <div>
            <div className="main-wrap">
                <p className="title">Выбери шаблон на свой вкус!</p>
                <p className="template-sub-text">В нашей коллекции их больше 10!</p>
        
                <div className="checkbox-row">
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" checked={checkedState[0]} onChange={() => handleOnChange(0)}/>
                        <p className="checkbox-sub-text">Свадьбы</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" checked={checkedState[1]} onChange={() => handleOnChange(1)}/>
                        <p className="checkbox-sub-text">Дни рождения</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" checked={checkedState[2]} onChange={() => handleOnChange(2)}/>
                        <p className="checkbox-sub-text">Корпоративы</p>
                    </div>
                    <div className="checkbox_element">
                        <input type="checkbox" name="" id="" checked={checkedState[3]} onChange={() => handleOnChange(3)}/>
                        <p className="checkbox-sub-text">Другое</p>
                    </div>
                </div>
                
                <ul>                  
                    {currentItems.map(item => (
                        <Link  key={item.id} to={'/order/{id}'.replace('{id}', item.id)}>
                            
                            <div className="order" style={{ 
                                backgroundImage: 'linear-gradient('+ whiteBack + ',' + whiteBack +'), url(' + item.previewPath + ')',
                                backgroundSize: '100%' 
                                }}>
                                <p className="orderName">{item.name}</p>
                                <p className="orderName">{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>

    </div>
    )
}