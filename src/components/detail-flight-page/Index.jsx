import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import SelectFlight from "./select-flight/Select-Flight";
import Reservation from './reservation/Reservation';
import CostFlight from "./cost-flight/Cost-Flight";
import OptionalServices from "./optional-services/Optional-Reservation";
import axios from 'axios'
import { DateTime } from "luxon";

const baseFlightsURL= 'http://localhost:3000/flights' 

const DetailFlighhtPage = ({formValue, fligthValue, setFligthValue}) => {
    const navigate = useNavigate();
    const [flightsOD, setFlightsOD]= useState([])
    const [flightsDO, setFlightsDO]= useState([])
    const [activeOrigen, setActiveOrigen]= useState([]);
    const [activeDestiny, setActiveDestiny]= useState([]);
    const [activeButtonSeat, setActiveButtonSeat]= useState(false);

    useEffect(()=>{
        axios.get(`${baseFlightsURL}?origin=${formValue.origen}&destiny=${formValue.destiny}`).then((response) => {
            console.log(response.data)
            setFlightsOD(response.data);
        });
        if(formValue.travelRounded === 'true'){
            axios.get(`${baseFlightsURL}?origin=${formValue.destiny}&destiny=${formValue.origen}`).then((response) => {
                console.log(response.data)
                setFlightsDO(response.data);
            });

        }
    },[])

    useEffect(()=>{
        if(formValue.travelRounded === 'true' && activeOrigen.length>0 && activeDestiny.length>0){
            setActiveButtonSeat(true)
        }
        if(formValue.travelRounded === 'false' && activeOrigen.length>0){
            setActiveButtonSeat(true)
        }
    },[activeOrigen,activeDestiny])
    
    return(
            <div className="row">
                <div className="col-lg-9">
                    <div className="title-detail-flight">
                        <h3><b>Vuelo de salida</b></h3>
                        <button onClick={()=> navigate('/')}>Cambiar vuelo</button>
                    </div>
                    <h4>{DateTime.fromISO(formValue.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                    <p className="text-black-50 mb-4">{formValue.origen} a {formValue.destiny}</p>
                    <p><b>Selección de horarios y equipaje</b></p>
                    {
                        flightsOD.map(item=>(
                            <SelectFlight flight={item} type={'origen'}  setFligthValue={setFligthValue} setActiveOrigen={setActiveOrigen} activeOrigen={activeOrigen} key={item.id}/>
                        ))
                    }
                    <>
                        {
                            flightsDO.length>0 &&
                            <>
                                <div className="title-detail-flight mt-4">
                                    <h3><b>Vuelo de regreso</b></h3>
                                    <button onClick={()=> navigate('/')}>Cambiar vuelo</button>
                                </div>
                                <h4>{DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                                <p className="text-black-50 mb-4">{formValue.destiny} a {formValue.origen}</p>
                                <p><b>Selección de horarios y equipaje</b></p>
                                {flightsDO.map(item=>(
                                    <SelectFlight flight={item}  setFligthValue={setFligthValue} type={'destiny'} activeDestiny={activeDestiny} setActiveDestiny={setActiveDestiny} key={item.id}/>
                                ))
                                }
                            </>
                        }
                    </>
                </div>
                <div className="col-lg-3">
                    <Reservation formValue={formValue}/>
                    <CostFlight />
                    <OptionalServices />
                    {activeButtonSeat &&
                        <button className="searchSeat mt-3">
                            Seleccionar asientos
                        </button>
                    }
                    
                </div>
            </div>
    )
}

export default DetailFlighhtPage;