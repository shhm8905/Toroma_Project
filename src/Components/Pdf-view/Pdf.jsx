import React from 'react';
import LaddPdf from "./ladd.pdf";
import Bread from "../Bread-crumbs/Bread";


const Pdf = () => {

    return (
        <div>
            <Bread/>
            <embed src={LaddPdf} type="application/pdf" style={{width:"100%",height:"100vh"}} />
        </div>
    )
}

export default Pdf;
