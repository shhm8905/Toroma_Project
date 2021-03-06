import React from 'react';
import {NavLink} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="kontakt">
                    <h2 className="footer-title">Kontakta oss</h2>
                    <p className="contact-desc">
                        <a href="tel:0586-422 20">0586-422 20</a><br/>
                        <a href="mailto:info@toroma.se">info@toroma.se</a> 
                    </p>
                    <p className="adress-desc">
                        Industrigatan 10
                        <br/> 693 35 Degerfors
                    </p>
                </div>

                <div className="social">
                    <h2 className="footer-title">Sociala Medier</h2>
                    <p className="social-desc">
                        <a href="https://www.facebook.com/toromasolceller" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;Facebook</a><br/>
                        <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram</a> 
                    </p>
                    
                </div>

                <div className="meny">
                    <h2 className="footer-title">Meny</h2>
                    <ul className="meny-content">
                        <li>
                            <NavLink className="a" exact to="/Toroma_Project/" >Hem</NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="/Toroma_Project/liftar">Liftar</NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="/Toroma_Project/personal">Personal</NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="/Toroma_Project/kontakt">Kontakt</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="om">
                    <h2 className="footer-title">Toroma</h2>
                    <p className="om-desc"><span className="om-title">Din <strong>el</strong> och <strong>Solcells installat??r</strong> i <strong>Degerfors.</strong> </span> Toroma Automation ??r ett kompetent bolag med bred erfarenhet i bagaget, vilket g??r att du som kund alltid betalar f??r den b??sta l??sningen till det r??tta priset.</p>
                </div>
            </div>
            <footer>
                <p>Copyright <strong>Toroma Automation AB</strong> 2021</p>
                <p>Producerad av <strong className="f-me" >Hazem Khaleel</strong></p>
            </footer>
        </div>
    )
}

export default Footer;
