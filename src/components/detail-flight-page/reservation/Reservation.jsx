import React from "react";
import { DateTime } from "luxon";

const Reservation = ({formValue, fligthValue}) => {
    return(
        <>
            {fligthValue.origen  &&
                <>
                    <h6 className="mt-2"><b>Tú reservación</b></h6>
                    <section className="reservation">
                        <div className="passenger">
                            <span className="title pb-3">Pasajeros</span>
                            <div className="column">
                                <span><b>{formValue.passengers.Adult} Adultos</b></span>
                                <span><b>{formValue.passengers.child} Niños</b></span>
                                <span><b>{formValue.passengers.baby} bebes</b></span>
                            </div>
                            
                        </div>
                        <p className="title">Vuelo de salida</p>
                        <div className="information">
                            <div className="cities">
                                <p>{formValue.codeOrigen}</p>
                                <span>______</span>
                                <p>{formValue.codeDestiny}</p>
                            </div>
                            <div className="hours">
                                <span className="text-gray">{DateTime.fromMillis(fligthValue.origen.dateLeaved).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                                <span className="text-gray">{DateTime.fromMillis(fligthValue.origen.dateArrive).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                            </div>
                        </div>
                        <p><b>{DateTime.fromISO(formValue.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</b></p>
                        <>
                            {formValue.travelRounded === 'true' && fligthValue.destiny &&
                                <>
                                    <p className="title">Vuelo de regreso</p>
                                    <div className="information">
                                        <div className="cities">
                                            <p>COL</p>
                                            <span>______</span>
                                            <p>MEX</p>
                                        </div>
                                        <div className="hours">
                                            <span className="text-gray">{DateTime.fromMillis(fligthValue.destiny.dateLeaved).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                                            <span className="text-gray">{DateTime.fromMillis(fligthValue.destiny.dateArrive).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                                        </div>
                                    </div>
                                    <p><b>{DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</b></p>
                                </>
                            }
                        </>
                    </section>
                </>
            }
        </>
    )
}

export default Reservation;