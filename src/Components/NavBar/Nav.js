import React,{useState} from "react";
import { NavLink} from "react-router-dom";
import Logo from "../../images/ToromaLogo.png";
import{Link} from "react-scroll";
import "./Nav.css";

const Nav = () => {
    const [active,setActive] = useState(false);
    
    const handleActive = () =>{
        if(active){
            setActive(false);
        }else{
            setActive(true);
        }
    }

    return (
        <div className="navbar">
            
            <div className="logo">
                <a href="/">
                    <img alt="ToromaLogo" src={Logo} />
                </a>
            </div>

            <input type="checkbox" className="box" id="box"/>
            <label className="label" htmlFor="box"></label>

            <ul className="nav">
                <li className="li"><NavLink className="a" exact to="/">Hem</NavLink></li>
                <li className="li">
                    <Link className="a" smooth={true} duration={2000} offset={-50} to="omoss">Om oss</Link>
                </li>
                <li className="li">
                    <Link className="a nav-sort" to="tjanster" smooth={true} duration={2000} offset={-50}>Våra Tjänster </Link>&nbsp;
                    <i className="fa fa-sort-desc drop-down" aria-hidden="true" onClick={handleActive}></i>
                    <ul className = {active?"nav-menu active-menu":"nav-menu"} >
                        
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="automation">Automation</Link>
                        </li>
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="installation">Installation</Link>
                        </li>
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="ladd">Elbilsladdare/Laddboxar</Link>
                        </li>
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="service">Service</Link>
                        </li>
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="solceller">Solceller</Link>
                        </li>
                        <li className="li">
                            <Link className="a" smooth={true} duration={2000} offset={-50} to="kamera">Kamerövervakning</Link>
                        </li>
                    </ul>
                </li>
                <li className="li"><NavLink className="a" to="/Personal">Personal</NavLink></li>
                <li className="li"><NavLink className="a" to="/Kontakt">Kontakt</NavLink></li>
                <li className="li"><NavLink className="a" to="/Liftar">Liftar</NavLink></li>
            </ul>
        
            
        </div>


    )
}
export default Nav;