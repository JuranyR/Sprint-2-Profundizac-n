import React, {useState, useEffect} from "react";
import SelectSeats from './select-seat/Select-Seat';
import Reservation from '../detail-flight-page/reservation/Reservation';
import CostFlight from "../detail-flight-page/cost-flight/Cost-Flight";
import OptionalServices from "./optional-services/Optional-Services";
import Total from './total/Total';
import Tua from './tua/Tua'
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

const SelectSeatsPage = ({formValue, fligthValue, costValue, setCostValue, costOptionalServices, setCostOptionalServices,seatSelected,setSeatSelected, cantPassengers, setDateDefaul}) => {
    const navigate = useNavigate();
    const [activeButtonSeat, setActiveButtonSeat]= useState(false);

    useEffect(()=>{
        if(formValue.travelRounded === 'true' && seatSelected.seatOrigen.length === cantPassengers && seatSelected.seatDestiny.length === cantPassengers){
            setActiveButtonSeat(true)
        }
        if(formValue.travelRounded === 'false' && seatSelected.seatOrigen.length === cantPassengers){
            setActiveButtonSeat(true)
        }
    },[seatSelected])

    return(
        <div className="row">
            <div className="col-lg-9">
                <div className="title-detail-flight">
                    <h3><b>Vuelo de salida</b></h3>
                    <button onClick={()=> {
                            setDateDefaul();
                            navigate('/');
                        }}
                    >
                        Cambiar vuelo
                    </button>
                </div>
                <h4>{DateTime.fromISO(formValue.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                <p className="text-black-50 mb-4">{formValue.origen} a {formValue.destiny}</p>
                <p><b>Selecciona tus asientos</b></p>
                <SelectSeats fligthValue={fligthValue.origen}  cantPassengers={cantPassengers} seatSelected={seatSelected.seatOrigen} allSeats={seatSelected} type={'origen'} setSeatSelected={setSeatSelected}/>
                {
                    formValue.travelRounded === 'true' && 
                    <>
                            <div className="title-detail-flight mt-5">
                            <h3><b>Vuelo de regreso</b></h3>
                            <button onClick={()=> {
                                    setDateDefaul();
                                    navigate('/');
                                    
                                }}
                            >
                                Cambiar vuelo
                            </button>
                        </div>
                        <h4>{DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                        <p className="text-black-50 mb-4">{formValue.destiny} a {formValue.origen}</p>
                        <p><b>Selecciona tus asientos</b></p>
                        <SelectSeats fligthValue={fligthValue.destiny} cantPassengers={cantPassengers} seatSelected={seatSelected.seatDestiny} allSeats={seatSelected} type={'destiny'} setSeatSelected={setSeatSelected}/>
                    </>
                }
            </div>
            <div className="col-lg-3">
                <Reservation formValue={formValue} fligthValue={fligthValue}/>
                <CostFlight fligthValue={fligthValue} travelRounded={formValue.travelRounded} setCostValue={setCostValue} costValue={costValue}/>
                <OptionalServices seatSelected={seatSelected} setCostOptionalServices={setCostOptionalServices} costOptionalServices={costOptionalServices}/>
                <Tua tua={costOptionalServices.tua}/>
                <Total Total={costOptionalServices.total+costValue.total} />
                {activeButtonSeat && 
                    <button className="searchSeat mt-3" onClick={()=> {
                        navigate('/payment');
                    }}
                    >
                        Pagar con Paypal
                    </button>
                }
            </div>
        </div>
    )
}

export default SelectSeatsPage;
