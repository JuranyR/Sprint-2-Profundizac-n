import React from "react";
import Minus from "../../../images/minus.svg";
import Plus from "../../../images/plus.svg";

const Passengers = ({setFormValues, formValue}) => {
    
    const onCounterSum =(Type, valueCounter)=>{
        setFormValues({
            ...formValue,
            passengers: {
                ...formValue.passengers,
                [Type]:valueCounter+1,
            },
        });
    }
    const onCounterLess =(Type,valueCounter)=> {
        setFormValues({
            ...formValue,
            passengers: {
                ...formValue.passengers,
                [Type]: valueCounter>0?valueCounter-1:0,
            }
        });
        
    }

    return(
        <>
            <div className="row buttons-passengers">
                <div className="col-6 column">
                    <span><b>Adultos</b></span>
                    <span>(13 + años)</span>
                </div>
                <div className="col-6">
                    <div className="hstack">
                        <button type="button" className="btn btn-left" onClick={()=>onCounterLess('Adult',formValue.passengers.Adult)}>
                            <img src={Minus}  alt="less" />
                        </button>
                        <span className="number"><b>{formValue.passengers.Adult}</b></span>
                        <button type="button" className="btn btn-right" onClick={()=>onCounterSum('Adult',formValue.passengers.Adult)}>
                            <img src={Plus} alt="sum" />
                        </button>
                    </div>
                </div>
                <div className="col-6 column">
                    <span><b>Niños</b></span>
                    <span>(2 - 12 años)</span>
                </div>
                <div className="col-6">
                    <div className="hstack">
                        <button type="button" className="btn btn-left" onClick={()=>onCounterLess('child',formValue.passengers.child)}>
                            <img src={Minus}  alt="less" />
                        </button>
                        <span className="number"><b>{formValue.passengers.child}</b></span>
                        <button type="button" className="btn btn-right"onClick={()=>onCounterSum('child',formValue.passengers.child)}>
                            <img src={Plus} alt="sum" />
                        </button>
                    </div>
                </div>
                <div className="col-6 column">
                    <span><b>Bebes</b></span>
                    <span>(0 - 23 meses)</span>
                </div>
                <div className="col-6">
                    <div className="hstack">
                        <button type="button" className="btn btn-left" onClick={()=>onCounterLess('baby',formValue.passengers.baby)}>
                            <img src={Minus}  alt="less" />
                        </button>
                        <span className="number"><b>{formValue.passengers.baby}</b></span>
                        <button type="button" className="btn btn-right" onClick={()=>onCounterSum('baby',formValue.passengers.baby)}>
                            <img src={Plus} alt="sum" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Passengers;