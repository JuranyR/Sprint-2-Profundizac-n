import React from "react";
import SelectFlight from "./select-flight/Select-Flight";
import Reservation from './reservation/Reservation';
import CostFlight from "./cost-flight/Cost-Flight";
import OptionalServices from "./optional-services/Optional-Reservation";

const DetailFlighhtPage = () => {
    return(
        <div className="row">
            <div className="col-lg-9">
                <div className="title-detail-flight">
                    <h3><b>Vuelo de salida</b></h3>
                    <button>Cambiar vuelo</button>
                </div>
                <h4>Martes 30 nov 2021</h4>
                <p className="text-black-50 mb-4">Cd Mex (AICM) a Culiacan</p>
                <p><b>Selección de horarios y equipaje</b></p>
                <SelectFlight />
                <SelectFlight />
                <div className="title-detail-flight mt-4">
                    <h3><b>Vuelo de regreso</b></h3>
                    <button>Cambiar vuelo</button>
                </div>
                <h4>Miércoles 08 dic 2021</h4>
                <p className="text-black-50 mb-4">Culiacan a Cd Mex (AICM)</p>
                <p><b>Selección de horarios y equipaje</b></p>
                <SelectFlight />
                <SelectFlight />

            </div>
            <div className="col-lg-3">
                <Reservation />
                <CostFlight />
                <OptionalServices />
                <button className="searchSeat mt-3">
                    Seleccionar asientos
                </button>
            </div>
        </div>
    )
}

export default DetailFlighhtPage;