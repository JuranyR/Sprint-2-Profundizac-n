import React, {useEffect} from "react";

const currency=(price)=>{
    return price.toFixed(0);
}
const CostFlight = ({fligthValue, travelRounded, setCostValue, costValue}) => {
    
    useEffect(()=>{
        let cost={...costValue}

        if(travelRounded && fligthValue.destiny){
            cost.tarifaBase= currency(fligthValue.origen.price+fligthValue.destiny.price+fligthValue.origen.priceBag+fligthValue.destiny.priceBag);
            cost.tarifaBaseDescuento= currency(Number(cost.tarifaBase));
            cost.ivaTarifa= currency(((fligthValue.origen.price+fligthValue.origen.priceBag)*0.19)+((fligthValue.destiny.price+fligthValue.destiny.priceBag)*0.19))
            cost.total= currency(Number(cost.tarifaBase) + Number(cost.ivaTarifa));
        } else if(fligthValue.origen) {
            cost.tarifaBase= currency(fligthValue.origen.price+ fligthValue.origen.priceBag);
            cost.tarifaBaseDescuento= currency(Number(cost.tarifaBase));
            cost.ivaTarifa= currency((fligthValue.origen.price+fligthValue.origen.priceBag)*0.19)
            cost.total= currency(Number(cost.tarifaBase) + Number(cost.ivaTarifa));
        }
        setCostValue({...cost});
    },[fligthValue,fligthValue])

    return(
        <>
            <h6 className="mt-4"><b>Costo de vuelo</b></h6>
            <section className="cost-flight">
                <div className="row">
                    <span className="col-6 text-black-50">Tarifa base</span>
                    <span className="col-6 text-end text-black-50">${costValue.tarifaBase || 0} MXN</span>
                    <span className="col-6 text-success">Descuento promocional</span>
                    <span className="col-6 text-end text-success">-$0 MXN</span>
                    <span className="col-6 text-success">Descuento promocional 2</span>
                    <span className="col-6 text-end text-success">-$0 MXN</span>
                    <span className="col-6 text-black-50">Tarifa base con descuento</span>
                    <span className="col-6 text-end text-black-50">${costValue.tarifaBaseDescuento || 0} MXN</span>
                    <span className="col-6 text-black-50">Iva tarifa</span>
                    <span className="col-6 text-end text-black-50">${costValue.ivaTarifa || 0} MXN</span>
                    <span className="col-6"><b>Total</b></span>
                    <span className="col-6 text-end"><b>${costValue.total} MXN</b></span>
                </div>
            </section>
        </>
    )
}

export default CostFlight;