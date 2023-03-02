import React from "react";

const Tua = ({tua}) => {

    return(
        <>
            <h6 className="mt-4"><b>Tua</b></h6>
            <section className="optional-services">
                <div className="row">
                    <span className="col-6 text-black-50">Tarifa de uso de aeropuerto(TUA)</span>
                    <span className="col-6 text-end text-black-50">${tua} MXN</span>
                </div>
            </section>
        </>
    )
}

export default Tua;
