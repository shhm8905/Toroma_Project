import React, {useState} from 'react';
import "./Slider2.css";
import {ImagesData2} from "./ImagesData2";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function Slider2() {


    let [current,setCurrent] = useState(0);
    const [isCurrent,setIsCurrent] = useState(false);
    
    let slideCounter = ImagesData2.length;

    if(!Array.isArray(ImagesData2) || ImagesData2.length <= 0){
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

    const ImageSlider = ImagesData2.map((data,index) =>{

        return (
            index === current && (
                <div className={index === current ? `${data.class} ttb1 active1` : `${data.class} ttb1` } key={data.id}>
                    <i className="fa fa-search-plus zoom-icon1" aria-hidden="true" onClick={handleShow}></i>
                    <div className="img1">
                        <img src={data.image} alt=""/>
                    </div>
                </div>
            ) 
            
        );
    });
    
    return (
        <div className="slidr1">
            {ImagesData2.map((data,index)=>{
                return(
                    index === current &&(
                        <div className={isCurrent?"imgWind1 active1":"imgWind1"} key={data.id} >
                            <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                <TransformComponent>
                                    <img className={index === current? "newImg1 active1":"newImg1"} src={data.image} alt="That is fun" />
                                </TransformComponent>
                            </TransformWrapper>
                            <i className="closeS1 fa fa-times fa-lg" aria-hidden="true" onClick={()=>setIsCurrent(false)}></i>
                            <i className="fa fa-arrow-circle-right right-icon1" aria-hidden="true" onClick={handlePreview}></i>
                            <i className="fa fa-arrow-circle-left left-icon1" aria-hidden="true" onClick={handleNext}></i>
                        </div>
                    )
                )
            })}
            <div className="slider-container1">
                <i className="fa fa-arrow-circle-right right-icon1" aria-hidden="true" onClick={handlePreview}></i>
                <i className="fa fa-arrow-circle-left left-icon1" aria-hidden="true" onClick={handleNext}></i>
                {ImageSlider}
            </div> 
        </div>
        
    )
}

export default Slider2;
