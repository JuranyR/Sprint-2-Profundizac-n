import React from "react";

const Reservation = () => {
    return(
        <>
            <h6 className="mt-2"><b>Tú reservación</b></h6>
            <section className="reservation">
                <div className="passenger">
                    <span className="title pb-3">Pasajeros</span>
                    <span><b>1 Adulto</b></span>
                </div>
                <p className="title">Vuelo de salida</p>
                <div className="information">
                    <div className="cities">
                        <p>MEX</p>
                        <span>______</span>
                        <p>COL</p>
                    </div>
                    <div className="hours">
                        <span className="text-gray">05:45 PM</span>
                        <span className="text-gray">08:47 PM</span>
                    </div>
                </div>
                <p><b>Martes, 30 noviembre, 2021</b></p>
                <p className="title">Vuelo de regreso</p>
                <div className="information">
                    <div className="cities">
                        <p>COL</p>
                        <span>______</span>
                        <p>MEX</p>
                    </div>
                    <div className="hours">
                        <span className="text-gray">07:28 AM</span>
                        <span className="text-gray">10:08 AM</span>
                    </div>
                </div>
                <p><b>Miercoles, 8 diciembre, 2021</b></p>
            </section>
        </>
    )
}

export default Reservation;