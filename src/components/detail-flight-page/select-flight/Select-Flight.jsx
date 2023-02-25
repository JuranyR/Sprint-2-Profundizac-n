import React from "react";
import lineStart from '../../../images/line_start.svg';
import lineEnd from '../../../images/line_end.svg';
import BagBlack from '../../../images/briefcase.svg';
import BagWhite from '../../../images/briefcase-white.svg'

const SelectFlight = () => {
    return(
        <section className="select-flight">
            <div className="column direction">
                <div>
                    <span>05:50 p.m</span>
                    <figure>
                        <p>1h: 57min</p>
                        <img src={lineStart} />
                        <img className="line-end" src={lineEnd} />
                        <p>Sin escalas</p>
                    </figure>
                    <span>06:47 p.m</span>
                </div>
            </div>
            <div className="column">
                <button className="bag isActive">
                    <img src={BagWhite} />
                    <p>1 objeto personal</p>
                    <p><b>$ 546 MXN</b></p>
                </button>
                <button className="bag">
                    <img src={BagBlack} />
                    <p>Equipaje de mano</p>
                    <p><b>$ 1084 MXN</b></p>
                </button>
                <button className="bag">
                    <img src={BagBlack} />
                    <p>Equipaje 25kg</p>
                    <p><b>$ 1945 MXN</b></p>
                </button>
            </div>
        </section>
    )
}

export default SelectFlight;