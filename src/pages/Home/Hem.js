import React from "react";
import {NavLink} from 'react-router-dom';
import Tjanster from "../Tjanster/Tjanster";
import Slider from "../../Components/Slider1/Slider";
import Nav from "../../Components/NavBar/Nav";
import "./Hem.css";


const Hem = () => {
    
    return (
        <div className="home">
            <Nav/>
            <div className="home-content">
                <div className="home-info">
                    <h1 className="home-title ltr title-mg">Toroma​​​​​​​</h1>
                    <h3>Automation, Installation, Solceller</h3>
                    <h4>Din kompetenta elinstallatör från Degerfors</h4>
                    <p>Tveka inte att kontakta oss om du behöver hjälp, oavsett om det är stora eller små jobb</p>
                    <NavLink className="home-contact" to="/Kontakt">Kontakta oss</NavLink> 
                </div>
            </div>
            <div className="omoss" id="omoss">
                <h1 data-aos="flip-left" className="omoss-title ltr title-mg" >Om Oss</h1>
                <h2 data-aos="fade-up" >Toroma Automation & Solceller – Din kompetenta elinstallatör. </h2>
                <p data-aos="fade-left" >
                    Toroma Automation är ett kompetent bolag med bred erfarenhet i bagaget, vilket gör att du som kund alltid betalar för den bästa lösningen till det rätta priset. 
                    Vare sig ni behöver hjälp med elinstallationer, nätverk , felsökning, skåpbyggen, 
                    Solceller,laddstolpar,åskskydd, kameraövervakning, elkontruktioner m.m. så finns vi där. 
                    Oavsett om det är stora eller små jobb för bostadsrättföreningar, privatpersoner, kontor , industri el så levererar vi enligt önskemål. 
                    Företaget är etablerat i Degerfors och vi har funnits sedan 2002. 
                    Våra elektriker har rätt utbildning och har många år inom branschen. 

                    Vi hjälper dig. 
                    Tveka inte att kontakta oss om du behöver hjälp . När du anlitar en elektriker från Toroma i Degerfors så kan du vara säker på att du får professionell och vänlig service. 
                </p>
                <div className="video">
                    <iframe data-aos="fade-left" width="100%" height="100%" src="https://www.youtube.com/embed/ZhI57rTCfAE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <Tjanster/>
            <Slider/>
        </div>
        
    )
}
export default Hem;