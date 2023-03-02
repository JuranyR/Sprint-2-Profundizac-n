import React, {useEffect, useState} from "react";

const OptionalServices = ({seatSelected,costOptionalServices,setCostOptionalServices}) => {
    const [costSelectSeat, setCostSelectSeat]= useState();
    const [ivaSelectSeat, setIvaSelectSeat]= useState();
    const [totalSelectSeat, setTotalSelectSeat]= useState();

    useEffect(()=>{
        const valueTotal= (seatSelected.seatOrigen.length+seatSelected.seatDestiny.length)*284
        setCostSelectSeat(valueTotal.toFixed(0))
        setIvaSelectSeat((valueTotal*0.19).toFixed(0))
        setTotalSelectSeat((valueTotal+(valueTotal*0.19)).toFixed(0))
        setCostOptionalServices({
            ...costOptionalServices,
            selectedSeat:valueTotal,
            ivaServices:valueTotal*0.19,
            total: valueTotal + (valueTotal*0.19) + costOptionalServices.tua
        })
    },[seatSelected])

    return(
        <>
          <h6 className="mt-4"><b>Servicios opcionales</b></h6>
            <section className="optional-services">
                <div className="row">
                    <span className="col-6 text-black-50">Selecciona tu asiento</span>
                    <span className="col-6 text-end text-black-50">${costSelectSeat} MXN</span>
                    <span className="col-6 text-black-50">Iva servicios</span>
                    <span className="col-6 text-end text-black-50">${ivaSelectSeat} MXN</span>
                    <span className="col-6"><b>Total</b></span>
                    <span className="col-6 text-end"><b>${totalSelectSeat} MXN</b></span>
                </div>
            </section>
        </>
    )
}

export default OptionalServices;
