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


const SelectSeats = () => {
    const clickSeat=(seat)=>{
        console.log(seat);
    }

    return(
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
            {seats.map((item, i) => (
                <>
                    {i===5?<p className="title-center">Estandar</p>:''}
                    <section className="select-seat mb-3">
                        <div className="row-seats">
                            <button className="seat selected" onClick={()=>clickSeat(item.row[0])}></button>
                            <button className="seat available"></button>
                            <button className="seat unavailable"></button>
                        </div>
                        <span className="cube mx-2">
                            {i+1}
                        </span>
                        <div className="row-seats">
                            <button className="seat selected"></button>
                            <button className="seat available"></button>
                            <button className="seat unavailable"></button>
                        </div>
                    </section>
                </>
            ))
            }
        </>
    )
}

export default SelectSeats;