import React,{useState,useEffect,useRef} from 'react';
import {PersonalData} from "../../pages/Personal/PersonalData";
import "./Slider4.css";

const Slider4 = () => {
    let [current,setCurrent] = useState(0);
    let slideCounter = PersonalData.length;
    const autoSlide = useRef();

    useEffect(()=>{
        let isMunted=true;
        if(isMunted)  autoSlide.current = handleNext;
        return()=>isMunted=false;
    });

    useEffect(()=>{
        let isMunted=true;
        setInterval(()=>{
            if(isMunted)autoSlide.current();
        },7500);
        return()=>isMunted=false;
    },[]); 
    

    if(!Array.isArray(PersonalData) || PersonalData.length <= 0){
        alert("There is no images or data !!!!");
    } 
    const handleNext =()=>{
        setCurrent(current === slideCounter-1 ? 0 : current+1);
    }
    
    const ImageSlider = PersonalData.map((data,index) =>{

        return (
            index === current && (
                <div className={index === current ? `item i4 active4` : `item` } key={data.id}>
                        <div className="item-img">
                            <img className="img4 " src={data.img} alt=""/>
                            <a className="item-mail" href= {`mailto:${data.mail}`} > <i className="fa fa-envelope" aria-hidden="true"></i></a>
                            <a className="item-mobil" href={`tel:${data.mobil}`} > <i className="fa fa-mobile" aria-hidden="true"></i></a>
                        </div>
                        <h3 className="item-title"> {data.name} </h3>
                        <span className="item-job"> {data.job} </span>
                </div>
            ) 
            
        );
    });
    
    return (
        <div>
            <div className="section-header" data-aos="fade-right">
                <h2 className="section-title">our team</h2>
                <span className="section-line"></span>
            </div>
            <div className="slider4">
                {ImageSlider}
            </div>
        </div>
        
    )
}

export default Slider4;
