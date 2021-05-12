import React from 'react';
import faktura from "./faktura.pdf";

const Pdf = () => {
    return (
        <div>
           <embed src={faktura} type="application/pdf" style={{width:"100%",height:"100vh"}} /> 
        </div>
    )
}

export default Pdf;
