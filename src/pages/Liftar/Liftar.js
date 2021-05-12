import React from "react";
import Bomlift from "../../images/Liftar/bomlift.jpg";
import Skylift from "../../images/Liftar/skylift.jpg";
import Saxlift from "../../images/Liftar/saxlift.jpg";
import Lilasaxlift from "../../images/Liftar/lila-saxlift.jpg";
import Bread from "../../Components/Bread-crumbs/Bread";
import "./Liftar.css";

const Liftar = () => {

    return (
        <div className="lift" >
            <Bread/>
            <header className="section-header">
                <h1 className="section-title ltr title-mg" data-aos="flip-left">Våra Liftar</h1>
                <section>
                    <p>
                        <b>Bokning</b>
                        Lifterna bokas genom att ringa Thomas Posth på <a href="tel:058642220" >0586-422 20 </a>/ <a href="tel:0706541748" >070-6541748 </a>
                    </p>
                </section>
            </header>
                
            <div className="container-liftar">

                <section className="text-block1">
                    <img src={Bomlift} alt="Bomlift-bild" className="bomlift"/>
                    <h2>Boom Lift  JLG  Diesel</h2>
                    <ul className="ul1" >
                        <li>Lyfthöjd 19m Vikt: 13064 kg.</li>
                        <li className="li1" > Priser
                            <ul>
                                <li>Dygn 2000+ moms , + Diesel kostnad</li>
                                <li>Långtidsutyrning enligt överenskomelse</li>
                                <li>Utkörning inom Karlskog/Degerfors kan ombesörjas</li>
                            </ul>
                        </li>
                    </ul>
                </section>
               
                
                <section className="text-block2">
                    <img src={Skylift} alt="skylift-bild" className="skylift"/>
                    <h2>Skylift Dexter</h2>
                    <ul className="ul1" >
                        <li>Lyfthöjd 15m</li>
                        <li className="li1" >Priser
                            <ul>
                                <li>Dygn  600 + moms</li>
                                <li>Helg 1000 + moms</li>
                                <li>Långtidsutyrning enligt överenskomelse</li>
                                <li>Utkörning med egen bil. <br/> OBS! Vikt 1470 kg.</li>
                            </ul>
                        </li>
                    </ul>
                </section>               

                <section className="text-block3">
                     <img src={Saxlift} alt="saxlift" className="saxlift" />
                    <h2>Saxlift Sky Jack 4626</h2>
                    <ul className="ul1" >
                        <li>Lyfthöjd:10.8m Bredd:1.17 Längd:2.26 Vikt: 1904 kg</li>
                        <li className="li1" >Priser
                            <ul>
                                <li>Dygn 800 + moms</li>
                                <li>Långtidsutyrning enligt överenskomelse</li>
                                <li>Utkörning inom Karlskog/Degerfors kan ombesörjas</li>
                            </ul>
                        </li>
                    </ul>
                </section>               

                <section className="text-block4">
                    <img src={Lilasaxlift} alt="lila-saxlift" className="lila-saxlift" />
                    <h2>Saxlift Sky Jack 3219</h2>
                    <ul className="ul1" >
                        <li>Lyfthöjd 7.6m Bredd 0.8 Längd. 1.2m  Vikt: 1179 kg <br />
                            <span>OBS!!!</span>(Kommer igenom dörrar!)
                        </li>
                        <li className="li1" >Priser
                            <ul>
                                <li>Dygn 500 + moms</li>
                                <li>Långtidsutyrning enligt överenskomelse</li>
                                <li>Utkörning inom Karlskog/Degerfors kan ombesörjas</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        

    )
}
export default Liftar;
