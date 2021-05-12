import React from "react";
import "./Kontakt.css";
import {NavLink} from "react-router-dom";
import Message from "../../Components/Message/Message";
import Bread from "../../Components/Bread-crumbs/Bread";

const Kontakt = () => {
    return (
        <div className="kontakt-container">
            <Bread/>
            <h2 className="ltr" >Kontakt oss</h2>

            <div className="message-content">
               
                <div className="info">
                    <div className="ring">
                        <h3 className="info-title" >Ring oss</h3>
                        <p><a href="tel:0586422 20" >0586–422 20</a></p>
                    </div>
                    <div className="address">
                        <h3 className="info-title">Address</h3>
                        <p>Toroma Automation AB
                        <br />Industrigatan 10
                        <br />693 35 Degerfors
                        </p>
                    </div>
                    <div className="e-post">
                        <h3 className="info-title">E-post Address</h3>
                        <p>info@toroma.se</p>
                    </div>
                    <div className="faktura">
                        <h3 className="info-title">Faktura adress</h3>
                        <p>Toroma Automation AB
                        <br />Fack 2202
                        <br />Box 226
                        <br />751 04 Uppsala
                        <NavLink to="/Toroma_Project/pdf1"><i className="fa fa-file-pdf-o faktura-file" aria-hidden="true"></i>&nbsp; Faktureringsinformation för leverantörer </NavLink>
                        </p>
                    </div>
                    <div className="hitta">
                        <h3 className="info-title">Hitta hit</h3>
                        <div className="map">
                            <iframe title="Hitta Toroma" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.633711883067!2d14.430383916152266!3d59.25556102397705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c88f10db9fcad%3A0x43ccfb94d3629957!2sToroma%20Automation%20AB!5e0!3m2!1ssv!2sse!4v1582725517023!5m2!1ssv!2sse" width="100%" height="400" frameBorder="0"  allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
                <div className="mess" >
                    <h3 className="message-title" >
                        Har du frågor?<br />
                        Skicka dom gärna till oss så kontaktar vi dig.
                    </h3>
                    <Message/> 
                </div>
            </div>
            
            
            
        </div>
    )
}
export default Kontakt;
