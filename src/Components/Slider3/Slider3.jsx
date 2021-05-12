import React, {useState} from 'react';
import "./Slider3.css";
import {ImagesData3} from "./ImagesData3";



function Slider3() {

    

    let [current,setCurrent] = useState(0);
    
    let slideCounter = ImagesData3.length;

    if(!Array.isArray(ImagesData3) || ImagesData3.length <= 0){
        alert("There is no images or data !!!!");
    }
    
    const handlePreview =()=>{
        setCurrent(current === 0 ? slideCounter-1 : current-1 );
        
    }
    const handleNext =()=>{
        setCurrent(current === slideCounter-1 ? 0 : current+1);
        
    }

    const ImageSlider = ImagesData3.map((data,index) =>{

        return (
            index === current && (
                <div className={index === current ? `${data.class} active3` : `${data.class} ` } key={data.id}>
                    <div className="img3">
                        <img src={data.image} alt=""/>
                    </div>
                </div>
            ) 
            
        );
    });
    
    return (
        <div className="slidr3">
           <div className="slider-container3">
                <i className="fa fa-arrow-circle-right right-icon3" aria-hidden="true" onClick={handlePreview}></i>
                <i className="fa fa-arrow-circle-left left-icon3" aria-hidden="true" onClick={handleNext}></i>
                {ImageSlider}
            </div> 
        </div>
        
    )
}

export default Slider3;
