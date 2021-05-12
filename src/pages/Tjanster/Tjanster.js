import React from "react";
import {NavLink} from "react-router-dom";

import "./Tjanster.css";

import Ladd1 from './images/Ladd-img/ladd1.jpg';
import Ladd2 from './images/Ladd-img/ladd2.jpg';
import Ladd3 from './images/Ladd-img/ladd3.jpg';

import Ladd4 from './images/Ladd-img/ladd4.jpg';
import Ladd5 from './images/Ladd-img/ladd5.jpg';
import Ladd6 from './images/Ladd-img/ladd6.jpg';

import Kam1 from "./images/Kamera-img/kam1.jpg";
import Kam2 from "./images/Kamera-img/kam2.jpg";

import Slider2 from "../../Components/Slider2/Slider2";
import Slider3 from "../../Components/Slider3/Slider3";
import Slider4 from  "../../Components/Slider4/Slider4";



const Tjanster = () => {
    
    return (

        <div className="tjanster" id="tjanster">
            <h1 className="ltr title-mg">Våra Tjänster</h1>

            <div id="Automation"className="automation">
                <h2 data-aos="fade-up">Toroma Automation</h2>
                <p data-aos="fade-right">
                    Vi erbjuder el och automationslösningar för industri och fastighet. 
                    Vi har mångårig erfarenhet och jobbar med väl inarbetade konstruktionsmetoder och väljer erkänt material av hög kvalitet. 
                    Vi utför även ombyggnationer, modifieringar och effektiviseringar av befintliga anläggningar och utför support samt underhåll av dessa. 
                    Vi driver projekt från förstudie, konstruktion, installation, programmering, igångkörning till slutdokumentation. 
                </p>
            </div>
            
            <div id="solceller" className="solceller">
                <h2 data-aos="fade-up">Toroma solceller</h2>
                <p data-aos="fade-left">
                    I början på maj 2018 så började vi installera solceller. 
                    Vi har nu installerat över 50 anläggningar.  Från små garage till stora lantgårdar med hundratals paneler. 
                    Vi har ”riktiga elektriker ” som utför montagen och där av har vi 100% nöjda kunder 
                    
                    Toroma Solceller Degerfors utför nyckelfärdiga lösningar för båda privatpersoner och företag. 
                    Ring Thomas på 070-6541748 för offert.
                </p>
                <Slider2/>
                <div className="video" >
                    <iframe data-aos="fade-up" width="100%" height="100%" src="https://www.youtube.com/embed/hHBiyB-Og5o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>

            <div id="Installation" className="installation" >
                <h2 data-aos="fade-up">Toroma Installation</h2>
                <ul data-aos="fade-up" >
                    <h2>Vi utför elinstallationer inom ett brett område som exempelvis </h2>
                    <li>Tillbyggnader</li>
                    <li>Renoveringar</li>
                    <li>Badrumsrenoveringar med värmegolv</li>
                    <li>Köksinstallationer</li>
                    <li>Infällning av el i betongväggar</li>
                    <li>Inkoppling av värmepumpar</li>
                    <li>Installationer för kontor</li>
                    <li>Belysning, park och trädgård</li>
                    <li>Belysning för kontor, industri och garage</li>
                    <li>Installation för styrning av belysning genom tid, rörelse eller skymning</li>
                    <li>Inkoppling av vitvaror</li>
                    <li>Datanät</li>
                    <li>Felsökning</li>
                    <li>Elcentraler</li>
                    <li>Inkoppling av industrimaskiner och verkstadsutrustningar</li>
                    <li>Värmekabel för vattenledningar</li>
                    <li>Nyproduktion av hus</li>
                    <li>Elinstallationer vid stambyten</li>
                    <li>Apparatskåpsbyggen</li>
                    <li>Elbilsladdare , Laddstolpar</li>
                    <li>Solcellsanläggningar</li>
                    <li>Åskskydd</li>
                </ul>
            </div>
            
            <div id="kamera" className="kamera">
                <div className="kamera-content">
                    <h2 data-aos="fade-up">Kameraövervakning</h2>
                    <p data-aos="fade-left">
                        Skapa en tryggare arbetsmiljö med högklassiga IP-kameror. 
                        Vi installerar kameraövervakning för alla behov, från små kamerasystem till komplexa övervakningssystem i butiker och på arbetsplatser.  
                    </p>
                    <div data-aos="fade-right" className="video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Brl7igpOnDY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                
                <div className="kamera-img">
                    <img data-aos="fade-left" alt="im" src={Kam1} />
                    <img data-aos="fade-left" alt="im" src={Kam2} />
                </div> 
            </div>

            <div id="service" className="service">
                <h2 data-aos="fade-up">Service</h2>
                <ul data-aos="fade-right">
                    <h4>Våra service elektriker hjälper snabbt och enkelt till med samtliga elproblem så som: </h4>
                    <li>Fel i maskiner.</li>
                    <li>Avgrävda kablar.</li>
                    <li>Överbelastningar.</li>
                    <li>Elfel</li>
                    <b>......och mycket mer. </b>
                </ul>
            </div>
            <Slider4/>
            <div id="ladd" className="ladd">
                <h1 data-aos="fade-right" className="ltr title-mg ladd-title">Elbilsladdare / Laddboxar/ Laddstolpar</h1>
                <h2 data-aos="fade-up" className="ltr " >Vi utför montage av Elbilsladdare från de flesta leverantörerna på marknaden.</h2>

                <div className="easee-content" >
                   <div className="easee" >
                        <h1 data-aos="fade-up" className="ltr">Easee Home</h1>
                        <p data-aos="fade-up">Easee Home är intelligent och anpassar sig till alla elektriska fordon, spänningar och elnät. Laddningsroboten känner automatiskt av om bilen stöder 3-fas eller inte. Det finns ingen anledning att fundera på tekniska specifikationer, Easee Home anpassar sig alltid till bilens behov och ger maximal tillgänglig ström i ditt hem.</p>
                    </div>

                    <div className="easee-img">
                        <img alt="im" data-aos="fade-left" src={Ladd1} />
                        <img alt="im" data-aos="fade-left" src={Ladd2} />
                        <img alt="im" data-aos="fade-left" src={Ladd3} />
                    </div> 

                    <ul data-aos="fade-up">
                        <h2>Fördelar</h2>
                        <li>Universell, passar alla typer av elbilar och laddhybrider.</li>
                        <li>Helt dynamisk laddningseffekt 1,4–22 kW (1- och 3-fasladdning)</li>
                        <li>Last- och fasbalansering (upp till 3 enheter per krets)</li>
                        <li>WiFi-anslutning</li>
                        <li>Integrerad eSIM i varje laddare, gratis livstidsprenumeration</li>
                        <li>Permanent låsning av Typ 2-kabeln</li>
                        <li>Integrerat jordfelsskydd (RCD) (Typ-B) och återställs automatiskt genom att dra ut laddningskabeln.</li>
                        <li>Integrerad RFID-läsare</li>
                        <li>Energimätning för avläsning av laddningsförbrukning </li>
                        <li>Roboten är 69 % mindre än andra lösningar och väger bara 1,5 kg</li>
                        <li>5 års garanti från installationsdagen.</li>
                        <li>Full kontroll med med valfri app-styrning. </li>
                        <li>Du väljer själv färg</li>
                        <p><span>Priser inkl moms med "Grön rot" borträknat</span> <br/><br/>Pris <span>3998 kr​  1-3 Fas 1.4 - 22 kw </span> <br/><br/> Pris standardinstallation : <span>4600kr</span></p>

                        <li>10m kabeldragning för max 16A 1-fas eller 3-fas</li>
                        <li>Befintlig elcentral och huvudsäkring förutsätts vara tillräcklig för installation.</li>
                        <li>Laddbox monteras på vägg.</li>
                        <li>Ledig plats finns i elcentral för säkringar för laddboxen  </li>
                        <p>Längre kabeldragning över 10m tillkommer:- 16A 1-fas eller 3-fas, 130kr/m inkl. arbetstid.</p>
                        <p><span>Totalpris installerat och klart: 8598 kronor inkl.moms !!!</span></p> <p>Tillägg Extra laddkabel : <span>998 kr</span><br/> Tillägg kabelstöd : <span>300 kr</span></p>
                    </ul>
                </div>
                <Slider3/>
                <div className="garo">
                    <h1 data-aos="fade-up" className="ltr" >Laddbox Garo Plus</h1>
                    <div className="garo-content">
                        <ul data-aos="fade-right">
                            <p><span>Priser inkl moms med "Grön rot" borträknat</span></p>
                            <li>Kompatibel med alla bilmodeller enligt EU-standard</li>
                            <li>Möjlighet att anpassa laddeffekt efter fastighetens förutsättningar </li>
                            <li>Smart laddbox med uppkoppling via 4G för trygg övervakning och framtidssäkrande uppdateringar</li>
                            <li>Tillgång till statistik och möjlighet att styra och övervaka din laddning</li>
                            <li>Robust design och 3 års garanti</li>
                            <p>Pris från: <span>5700kr​  1Fas 3.7-7.4 kw</span></p>
                            <p>Tillägg 3fas 11-22kw : <span>998 kr</span></p>
                            <p>​​​​​​​Tillägg Fastkabel : <span>350 kr</span></p>
                            <p>Pris standardinstallation : <span>4600kr</span></p>
                            <li>10m kabeldragning för max 16A 1-fas eller 3-fas</li>
                            <li>Befintlig elcentral och huvudsäkring förutsätts vara tillräcklig för installation.</li>
                            <li>Laddbox monteras på vägg.</li>
                            <li>Ledig plats finns i elcentral för säkringar och jordfelsbrytare för laddboxen  </li>
                            <p>Längre kabeldragning över 10m tillkommer:<br/>- 16A 1-fas eller 3-fas, 130kr/m inkl. arbetstid.<br/><br/><span>Obs !  I alla priserna ör grön rot medräknat.</span></p>
                            <NavLink to="/Toroma_Project/pdf" target="_blank"><i className="fa fa-file-pdf-o garo-file" aria-hidden="true"></i>&nbsp; Manual Garo Laddbox </NavLink>
                        </ul>
                        <div className="garo-img">
                            <img alt="im" data-aos="fade-left" src={Ladd4} />
                            <img alt="im" data-aos="fade-left" src={Ladd5} />
                            <img alt="im" data-aos="fade-left" src={Ladd6} />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tjanster;