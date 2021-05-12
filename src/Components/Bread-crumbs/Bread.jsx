import React from 'react';
import {NavLink} from "react-router-dom";
import "./Bread.css";

const Bread = () => {
    return (
        <div className="bread">
            
            <ul className="bread-nav">
                <h1 className="bread-title">Toroma</h1>
                <li className="lis">
                    <NavLink className="a" exact to="/Toroma_Project/" >Hem</NavLink>
                </li>
                <li className="lis">
                    <NavLink className="a" to="/Toroma_Project/personal" >Personal</NavLink>
                </li>
                <li className="lis">
                    <NavLink className="a" to="/Toroma_Project/liftar" >Liftar</NavLink>
                </li>
                <li className="lis">
                    <NavLink className="a" to="/Toroma_Project/kontakt" >Kontakt</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Bread;
