import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTicketsPage from "./components/search-tickets-page/Index";
import DetailFlighhtPage from "./components/detail-flight-page/Index";
import SelectSeatsPage from './components/select-seats-page/Index';
import PaymentPage from './components/payment-page/Index';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const [seatSelected,setSeatSelected] =useState({seatOrigen:[],seatDestiny:[]});
    const [costValue, setCostValue]= useState({
        tarifaBase:null,
        tarifaBaseDescuento:null,
        ivaTarifa:null,
        total:null
    })
    const [fligthValue, setFligthValue]= useState({
        origen:null,
        destiny: null,
    })
    const [formValue, setFormValues]= useState({
        travelRounded: null,
        origen:null,
        codeOrigen:null,
        destiny:null,
        codeDestiny:null,
        dateLeave:null,
        dateArrive:null,
        passengers:{ Adult: 0, child: 0, baby: 0},
        code: ''
    })
    const [costOptionalServices, setCostOptionalServices] = useState({
        selectedSeat:null,
        ivaServices:null,
        tua: 1191,
        total:0
    })

    const setDateDefaul=()=>{
        setCostOptionalServices({
            selectedSeat:null,
            ivaServices:null,
            tua: 1191,
            total:0
        })
        setFormValues({
            travelRounded: null,
            origen:null,
            codeOrigen:null,
            destiny:null,
            codeDestiny:null,
            dateLeave:null,
            dateArrive:null,
            passengers:{ Adult: 0, child: 0, baby: 0},
            code: ''
        })
        setFligthValue({
            origen:null,
            destiny: null, 
        })
        setCostValue({
            tarifaBase:null,
            tarifaBaseDescuento:null,
            ivaTarifa:null,
            total:null
        })
        setSeatSelected({
            seatOrigen:[],
            seatDestiny:[]
        })
    }
    const cantPassengers=Object.values(formValue.passengers).reduce((a, b) => a + b, 0);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchTicketsPage formValue={formValue}  setFormValues={setFormValues} />} />
                <Route path="/detail" element={<DetailFlighhtPage formValue={formValue} fligthValue={fligthValue} setFligthValue={setFligthValue} setCostValue={setCostValue} costValue={costValue} setDateDefaul={setDateDefaul} /> } />
                <Route path="/seats" element={<SelectSeatsPage  formValue={formValue} fligthValue={fligthValue} costValue={costValue} setCostValue={setCostValue} setCostOptionalServices={setCostOptionalServices} costOptionalServices={costOptionalServices} setSeatSelected={setSeatSelected} seatSelected={seatSelected} cantPassengers={cantPassengers} setDateDefaul={setDateDefaul}/>} />
                <Route path="/payment"  element={<PaymentPage fligthValue={fligthValue}  total={costOptionalServices.total+costValue.total} formValue={formValue} seatSelected={seatSelected} setDateDefaul={setDateDefaul} cantPassengers={cantPassengers}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
