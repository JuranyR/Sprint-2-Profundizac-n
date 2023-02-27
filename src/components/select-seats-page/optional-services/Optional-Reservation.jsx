import React from "react";

const OptionalServices = () => {
    return(
        <>
          <h6 className="mt-4"><b>Servicios opcionales</b></h6>
            <section className="optional-services">
                <div className="row">
                    <span className="col-6 text-black-50">Selecciona tu asiento</span>
                    <span className="col-6 text-end text-black-50">$284 MXN</span>
                    <span className="col-6 text-black-50">Iva servicios</span>
                    <span className="col-6 text-end text-black-50">$45 MXN</span>
                    <span className="col-6"><b>Total</b></span>
                    <span className="col-6 text-end"><b>$329 MXN</b></span>
                </div>
            </section>
        </>
    )
}

export default OptionalServices;
