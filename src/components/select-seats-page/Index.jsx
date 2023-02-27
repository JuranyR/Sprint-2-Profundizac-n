import React, {useState} from "react";
import SelectSeats from './select-seat/Select-Seat';
import Reservation from '../detail-flight-page/reservation/Reservation';
import CostFlight from "../detail-flight-page/cost-flight/Cost-Flight";
import OptionalServices from "./optional-services/Optional-Reservation";
import Total from './total/Total';
import Tua from './tua/Tua'

const SelectSeatsPage = ({formValue, fligthValue, costValue, setCostValue}) => {
    const [seatSelected,setSeatSelected] =useState({seatOrigen:[],seatDestiny:[]});
    const cantPassengers=Object.values(formValue.passengers).reduce((a, b) => a + b, 0);
    
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
                <SelectSeats fligthValue={fligthValue.origen}  cantPassengers={cantPassengers} seatSelected={seatSelected.seatOrigen} allSeats={seatSelected} type={'origen'} setSeatSelected={setSeatSelected}/>
                <div className="title-detail-flight mt-5">
                    <h3><b>Vuelo de regreso</b></h3>
                    <button>Cambiar vuelo</button>
                </div>
                <h4>Miércoles 08 dic 2021</h4>
                <p className="text-black-50 mb-4">Culiacan a Cd Mex (AICM)</p>
                <p><b>Selecciona tus asientos</b></p>
                <SelectSeats fligthValue={fligthValue.destiny} cantPassengers={cantPassengers} seatSelected={seatSelected.seatDestiny} allSeats={seatSelected} type={'destiny'} setSeatSelected={setSeatSelected}/>
            </div>
            <div className="col-lg-3">
                <Reservation formValue={formValue} fligthValue={fligthValue}/>
                <CostFlight fligthValue={fligthValue} travelRounded={formValue.travelRounded} setCostValue={setCostValue} costValue={costValue}/>
                <OptionalServices />
                <Tua />
                <Total />
                {seatSelected.seatOrigen.length === cantPassengers && seatSelected.seatDestiny.length === cantPassengers && 
                    <button className="searchSeat mt-3">
                        Pagar con Paypal
                    </button>
                }
            </div>
        </div>
    )
}

export default SelectSeatsPage;
