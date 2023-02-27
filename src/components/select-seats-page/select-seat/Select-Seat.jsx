import React from "react";

const seats= [
    {row: ['A1','B1','C1','D1','E1','F1']},
    {row: ['A2','B2','C2','D2','E2','F2']},
    {row: ['A3','B3','C3','D3','E3','F3']},
    {row: ['A4','B4','C4','D4','E4','F4']},
    {row: ['A5','B5','C5','D5','E5','F5']},
    {row: ['A6','B6','C6','D6','E6','F6']},
    {row: ['A7','B7','C7','D7','E7','F7']},
    {row: ['A8','B8','C8','D8','E8','F8']},
    {row: ['A9','B9','C9','D9','E9','F9']},
    {row: ['A10','B10','C10','D10','E10','F10']},
];


const SelectSeats = ({fligthValue, cantPassengers,setSeatSelected, type, seatSelected,allSeats}) => {
    
    const clickSeat=(seat)=>{
        if(seatSelected.length < cantPassengers){
            const newSeats=[...seatSelected,seat]
            setSeatSelected(type==='origen'?{...allSeats,seatOrigen:newSeats}:{...allSeats,seatDestiny:newSeats})
        }
        if(seatSelected.includes(seat)){
            const filterSeats= seatSelected.filter(current=> current !== seat);
            setSeatSelected(type==='origen'?{...allSeats,seatOrigen:filterSeats}:{...allSeats,seatDestiny:filterSeats})
        }
    }

    return(
        <>
            {seatSelected &&
                <>
            <section className="select-seat">
                <div className="row-seats">
                    <span className="cube">A</span>
                    <span className="cube">B</span>
                    <span className="cube">C</span>
                </div>
                <span className="cube mx-2">
                    
                </span>
                <div className="row-seats">
                    <span className="cube">D</span>
                    <span className="cube">E</span>
                    <span className="cube">F</span>
                </div>
            </section>
            <p className="title-center">Salida rápida</p>
            {seats.map((item, i) => {
                const intersection = item.row.filter(element => fligthValue.Seats.includes(element));
                const isUnavailable=(item)=>{
                    if(intersection.includes(item)){
                        return "seat unavailable"
                    }
                    if(seatSelected.includes(item)){
                        return "seat selected"
                    }
                    return "seat available"
                }

                return(
                    <div key={i}>
                        {i===5?<p className="title-center">Estandar</p>:''}
                        <section className="select-seat mb-3">
                            <div className="row-seats">
                                <button className={isUnavailable(item.row[0])} disabled={isUnavailable(item.row[0])==="seat unavailable"?true:false} onClick={()=>clickSeat(item.row[0])}></button>
                                <button className={isUnavailable(item.row[1])} disabled={isUnavailable(item.row[1])==="seat unavailable"?true:false} onClick={()=>clickSeat(item.row[1])}></button>
                                <button className={isUnavailable(item.row[2])} disabled={isUnavailable(item.row[2])==="seat unavailable"?true:false} onClick={()=>clickSeat(item.row[2])}></button>
                            </div>
                            <span className="cube mx-2">
                                {i+1}
                            </span>
                            <div className="row-seats">
                                <button className={isUnavailable(item.row[3])} disabled={isUnavailable(item.row[3])==="seat unavailable"?true:false} onClick={()=>clickSeat(item.row[3])}></button>
                                <button className={isUnavailable(item.row[4])} disabled={isUnavailable(item.row[4])==="seat unavailable"?true:false}  onClick={()=>clickSeat(item.row[4])}></button>
                                <button className={isUnavailable(item.row[5])} disabled={isUnavailable(item.row[5])==="seat unavailable"?true:false} onClick={()=>clickSeat(item.row[5])}></button>
                            </div>
                        </section>
                    </div>
                )
            })
            }
                </>
            }
        </>
    )
}

export default SelectSeats;