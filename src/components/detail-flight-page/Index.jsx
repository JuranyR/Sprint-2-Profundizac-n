import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import SelectFlight from "./select-flight/Select-Flight";
import Reservation from './reservation/Reservation';
import CostFlight from "./cost-flight/Cost-Flight";
import axios from 'axios'
import { DateTime } from "luxon";

const baseFlightsURL= 'https://sprint-2p-server-production.up.railway.app/flights' 

const DetailFlighhtPage = ({formValue, fligthValue, setFligthValue,setCostValue, costValue,setDateDefaul}) => {
    const navigate = useNavigate();
    const [flightsOD, setFlightsOD]= useState([])
    const [flightsDO, setFlightsDO]= useState([])
    const [activeOrigen, setActiveOrigen]= useState([]);
    const [activeDestiny, setActiveDestiny]= useState([]);
    const [activeButtonSeat, setActiveButtonSeat]= useState(false);

    useEffect(()=>{
        if(formValue){
            axios.get(`${baseFlightsURL}?origin=${formValue.origen}&destiny=${formValue.destiny}`).then((response) => {
                const filterDate= response.data.filter(date=> DateTime.fromMillis(date.dateLeaved).toISODate() === formValue.dateLeave)
                setFlightsOD(filterDate);
            });
            if(formValue.travelRounded === 'true'){
                axios.get(`${baseFlightsURL}?origin=${formValue.destiny}&destiny=${formValue.origen}`).then((response) => {
                    const filterDate= response.data.filter(data=> DateTime.fromMillis(data.dateArrive).toISODate() === formValue.dateArrive)
                    setFlightsDO(filterDate);
                });
    
            }
        }
    },[formValue])

    useEffect(()=>{
        if(formValue.travelRounded === 'true' && activeOrigen.length>0 && activeDestiny.length>0){
            setActiveButtonSeat(true)
        }
        if(formValue.travelRounded === 'false' && activeOrigen.length>0){
            setActiveButtonSeat(true)
        }
    },[activeOrigen,activeDestiny, formValue])
    
    return(
            <div className="row">
                <div className="col-lg-9">
                    <div className="title-detail-flight">
                        <h3><b>Vuelo de salida</b></h3>
                        <button onClick={()=> {
                            setDateDefaul();
                            navigate('/');
                            
                        }}>Cambiar vuelo</button>
                    </div>
                    {
                        flightsOD.length>0 ?
                        <>
                            <h4>{DateTime.fromISO(formValue.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                            <p className="text-black-50 mb-4">{formValue.origen} a {formValue.destiny}</p>
                            <p><b>Selección de horarios y equipaje</b></p>
                            {
                                flightsOD.map(item=>(
                                    <SelectFlight flight={item} type={'origen'}  setFligthValue={setFligthValue} setActiveOrigen={setActiveOrigen} activeOrigen={activeOrigen} fligthValue={fligthValue} key={item.id}/>
                                ))
                            }
                        </>
                        : <h3 className="text-danger"><b>No existe vuelo disponible para está fecha</b></h3>
                    }
                    <>
                        {
                            flightsDO.length>0 ?
                            <>
                                <div className="title-detail-flight mt-4">
                                    <h3><b>Vuelo de regreso</b></h3>
                                    <button onClick={()=> {
                                        setDateDefaul();
                                        navigate('/');
                                        
                                    }}>Cambiar vuelo</button>
                                </div>
                                <h4>{DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}</h4>
                                <p className="text-black-50 mb-4">{formValue.destiny} a {formValue.origen}</p>
                                <p><b>Selección de horarios y equipaje</b></p>
                                {flightsDO.map(item=>(
                                    <SelectFlight flight={item}  setFligthValue={setFligthValue} type={'destiny'} activeDestiny={activeDestiny} setActiveDestiny={setActiveDestiny} fligthValue={fligthValue} key={item.id}/>
                                ))
                                }
                            </>
                            : formValue.travelRounded === 'true' ?
                                <>
                                    <div className="title-detail-flight mt-4">
                                        <h3><b>Vuelo de regreso</b></h3>
                                        <button onClick={()=> {
                                            setDateDefaul();
                                            navigate('/');
                                            
                                        }}>Cambiar vuelo</button>
                                    </div>
                                    <h3 className="text-danger"><b>No existe vuelo disponible para está fecha</b></h3>
                                </>
                            :''
                        }
                    </>
                </div>
                <div className="col-lg-3">
                    <Reservation formValue={formValue} fligthValue={fligthValue}/>
                    <CostFlight fligthValue={fligthValue} travelRounded={formValue.travelRounded} setCostValue={setCostValue} costValue={costValue} code={formValue.code} />
                    {activeButtonSeat &&
                        <button className="searchSeat mt-3" onClick={()=>navigate('/seats')}>
                            Seleccionar asientos
                        </button>
                    }
                    
                </div>
            </div>
    )
}

export default DetailFlighhtPage;