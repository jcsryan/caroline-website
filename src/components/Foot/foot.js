import React from "react";
import HIPPA from '../Assets/HIPAA-Compliant-Logo.png';
import BCBSMA from '../Assets/BCBSMA.png';

function Foot() {
    return(
        <div id="aboutid" className="Footer">
            
            <div className="Footer-info">
                <img className="HIPAA" src={HIPPA}></img>
                <img className="BCBSMA" src={BCBSMA}></img>
            </div>
        </div>
    )
}

export default Foot;