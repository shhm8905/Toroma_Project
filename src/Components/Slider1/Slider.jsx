import React, {useState} from 'react';
import "./Slider.css";
import {ImagesData} from "./ImagesData";


function Slider() {

    let [current,setCurrent] = useState(0);
    const [isCurrent,setIsCurrent] = useState(false);
    let slideCounter = ImagesData.length;

    if(!Array.isArray(ImagesData) || ImagesData.length <= 0){
        alert("There is no images or data !!!!");
    }

    const handlePreview =()=>{
        setCurrent(current === 0 ? slideCounter-1 : current-1 );
    }
    const handleNext =()=>{
        setCurrent(current === slideCounter-1 ? 0 : current+1);
    }
    const handleShow =()=>{
        setIsCurrent(true);
    }

    const ImageSlider = ImagesData.map((data,index) =>{

        return (
            index === current && (
                <div className={index === current ? `${data.class} ttb active` : `${data.class} ttb` } key={data.id}>
                    <i className="fa fa-search-plus zoom-icon" aria-hidden="true" onClick={handleShow}></i>
                    <div className="img">
                        <img src={data.image} alt=""/>
                    </div>
                    <p className="slider-title"> {data.title} </p>
                </div>
            ) 
            
        );
    });
    
    return (
        <div className="slidr" >
            {ImagesData.map((data,index)=>{
                return(
                    index === current &&(
                        <div className={isCurrent?"imgWind active":"imgWind"} key={data.id} >
                            <img className={index === current ? "newImg active":"newImg"} src={data.image} alt="That is fun" />
                            <i className="closeS fa fa-times fa-lg" aria-hidden="true" onClick={()=>setIsCurrent(false)}></i>
                            <i className="fa fa-arrow-circle-right right-icon" aria-hidden="true" onClick={handlePreview}></i>
                            <i className="fa fa-arrow-circle-left left-icon" aria-hidden="true" onClick={handleNext}></i>
                        </div>
                    )
                )
            })}
           <h1 data-aos="flip-left"  className="s-title ltr title-mg">Våra senaste projekt</h1> 
           <div className="slider-container">
                <i className="fa fa-arrow-circle-right right-icon" aria-hidden="true" onClick={handlePreview}></i>
                <i className="fa fa-arrow-circle-left left-icon" aria-hidden="true" onClick={handleNext}></i>
                {ImageSlider}
            </div> 
        </div>
        
    )
}

export default Slider;
