import React from "react";

const CostFlight = () => {
    return(
        <>
            <h6 className="mt-4"><b>Costo de vuelo</b></h6>
            <section className="cost-flight">
                <div className="row">
                    <span className="col-6 text-black-50">Tarifa base</span>
                    <span className="col-6 text-end text-black-50">$3,358 MXN</span>
                    <span className="col-6 text-success">Descuento promocional</span>
                    <span className="col-6 text-end text-success">-$2,068 MXN</span>
                    <span className="col-6 text-success">Descuento promocional 2</span>
                    <span className="col-6 text-end text-success">-$65 MXN</span>
                    <span className="col-6 text-black-50">Tarifa base con descuento</span>
                    <span className="col-6 text-end text-black-50">$1225 MXN</span>
                    <span className="col-6 text-black-50">Iva tarifa</span>
                    <span className="col-6 text-end text-black-50">$186 MXN</span>
                    <span className="col-6"><b>Total</b></span>
                    <span className="col-6 text-end"><b>$1421 MXN</b></span>
                </div>
            </section>
        </>
    )
}

export default CostFlight;