import React from 'react';
import faktura from "./faktura.pdf";
import Bread from "../Bread-crumbs/Bread";

const Pdf = () => {
    return (
        <div>
            <Bread/>
           <embed src={faktura} type="application/pdf" style={{width:"100%",height:"100vh"}} /> 
        </div>
    )
}

export default Pdf;
