import React from "react";
import "./Personal.css";
import {PersonalData} from "./PersonalData";
import Bread from "../../Components/Bread-crumbs/Bread";


const Personal = () => {
    return (
        
        <div className="team">
            <Bread/>
            <div className="section-header">
                <h2 data-aos="flip-left" className="section-title">our team</h2>
                <span className="section-line"></span>
            </div>
            <div className="team-content">
                {PersonalData.map((data)=>{
                    return(
                        <div key={data.id} className="team-item tb">
                            <div className="team-img">
                                <img src={data.img} alt="img-team1" />
                                <div className="team-overlay">
                                    <a href= {`mailto:${data.mail}`} >{null}<i className="fa fa-envelope" aria-hidden="true"></i></a>
                                    <a href={`tel:${data.mobil}`} > {null} <i className="fa fa-mobile" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-info-title"> {data.name} </h3>
                                <span className="team-info-text"> {data.job} </span>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}
export default Personal;