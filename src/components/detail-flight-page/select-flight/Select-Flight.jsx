import React, {useState} from "react";
import lineStart from '../../../images/line_start.svg';
import lineEnd from '../../../images/line_end.svg';
import BagBlack from '../../../images/briefcase.svg';
import BagWhite from '../../../images/briefcase-white.svg'
import { DateTime } from "luxon";

const bags=[
    {
        bag:"1 objeto personal",
        price:546
    },
    {
        bag:"Equipaje de mano",
        price:1084
    },
    {
        bag:"Equipaje 25kg",
        price:1945
    }
]
const SelectFlight = ({flight,type, setFligthValue, activeOrigen, setActiveOrigen, setActiveDestiny, activeDestiny}) => {
    
    let objectDuration;
    if(flight){
        objectDuration= DateTime.fromMillis(flight.dateArrive).diff(DateTime.fromMillis(flight.dateLeaved), ['hours', 'minutes']).toObject()
    }
    
    const selectSeat = (item,typeFlight,flightId)=>{
        const key= item.bag+'-'+flightId;
        if(typeFlight==='origen'){
            setActiveOrigen([key])
        }else{
            setActiveDestiny([key])
        }      
        setFligthValue({...item})  
    }
    
    return(
        <>
        {flight &&
            <section className="select-flight">
                <div className="column direction">
                    <div>
                        <span>{DateTime.fromMillis(flight.dateLeaved).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        <figure>
                            <p>{objectDuration.hours} h: {objectDuration.minutes} min</p>
                            <img src={lineStart} />
                            <img className="line-end" src={lineEnd} />
                            <p>{flight.scales}</p>
                        </figure>
                        <span>{DateTime.fromMillis(flight.dateArrive).toLocaleString({  hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                    </div>
                </div>
                <div className="column">
                    {
                        bags.map(item=>{
                            let isActive
                            if(type==='origen'){isActive= activeOrigen.includes(item.bag+'-'+flight.id)}
                            else {isActive= activeDestiny.includes(item.bag+'-'+flight.id)}
                            
                            return (
                                <button key={item.bag}  className={isActive?'bag isActive':'bag'} onClick={()=>selectSeat(item, type, flight.id)}>
                                    <img src={isActive?BagWhite:BagBlack} />
                                    <p>{item.bag}</p>
                                    <p><b>$ {item.price} MXN</b></p>
                                </button>
                            )
                        })
                    }
                   
                </div>
            </section>
        }
        </>
    )
}

export default SelectFlight;