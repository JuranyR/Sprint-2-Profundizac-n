import React from "react";

const Total = ({Total}) => {
    
    return(
        <>
            <div className="optional-services mt-3">
                <div className="row ">
                    <span className="col-6"><b>Total</b></span>
                    <span className="col-6 text-end"><b>${Total.toFixed(0) || 0} MXN</b></span>
                </div>
            </div>
        </>
    )
}

export default Total;
