import React from "react";
import SelectSeats from './select-seat/Select-Seat';
import Reservation from '../detail-flight-page/reservation/Reservation';
import CostFlight from "../detail-flight-page/cost-flight/Cost-Flight";
import OptionalServices from "../detail-flight-page/optional-services/Optional-Reservation";
import Total from './total/Total';
import Tua from './tua/Tua'

const SelectSeatsPage = () => {
    return(
        <div className="row">
            <div className="col-lg-9">
                <div className="title-detail-flight">
                    <h3><b>Vuelo de salida</b></h3>
                    <button>Cambiar vuelo</button>
                </div>
                <h4>Martes 30 nov 2021</h4>
                <p className="text-black-50 mb-4">Cd Mex (AICM) a Culiacan</p>
                <p><b>Selecciona tus asientos</b></p>
                <SelectSeats />
                <div className="title-detail-flight mt-5">
                    <h3><b>Vuelo de regreso</b></h3>
                    <button>Cambiar vuelo</button>
                </div>
                <h4>Miércoles 08 dic 2021</h4>
                <p className="text-black-50 mb-4">Culiacan a Cd Mex (AICM)</p>
                <p><b>Selecciona tus asientos</b></p>
                <SelectSeats />
            </div>
            <div className="col-lg-3">
                <Reservation />
                <CostFlight />
                <OptionalServices />
                <Tua />
                <Total />
                <button className="searchSeat mt-3">
                    Pagar con Paypal
                </button>
            </div>
        </div>
    )
}

export default SelectSeatsPage;
