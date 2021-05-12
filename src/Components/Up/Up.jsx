import React from 'react';
import * as Scroll from "react-scroll";
import "./Up.css";

function Up() {
    const scroll=Scroll.animateScroll;
    window.addEventListener('scroll',()=>{
        const upIcon = document.getElementById('upIcon');
        if(window.scrollY>=600){
            upIcon.style.display="flex";
        }else{
            upIcon.style.display="none";
        }
    });

    return (
        <div className="upIcon" id="upIcon">
            <i className="fa fa-angle-double-up icon" aria-hidden="true" onClick={()=>scroll.scrollToTop()}></i>
        </div>
    )
}

export default Up;