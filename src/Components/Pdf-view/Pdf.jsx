import React from 'react';
import LaddPdf from "./ladd.pdf";


const Pdf = () => {

    return (
        <div>
            <embed src={LaddPdf} type="application/pdf" style={{width:"100%",height:"100vh"}} />
        </div>
    )
}

export default Pdf;
