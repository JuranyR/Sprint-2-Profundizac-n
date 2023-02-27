import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTicketsPage from "./components/search-tickets-page/Index";
import DetailFlighhtPage from "./components/detail-flight-page/Index";
import SelectSeatsPage from './components/select-seats-page/Index';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
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
        origen:'El Dorado International Airport',
        codeOrigen:'BOG',
        destiny:'Olaya Herrera Airport',
        codeDestiny:'EOH',
        dateLeave:null,
        dateArrive:null,
        passengers:{ Adult: 0, child: 0, baby: 0},
        code: ''
    })

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchTicketsPage formValue={formValue}  setFormValues={setFormValues} />} />
                <Route path="/detail" element={<DetailFlighhtPage formValue={formValue} fligthValue={fligthValue} setFligthValue={setFligthValue} setCostValue={setCostValue} costValue={costValue} /> } />
                <Route path="/seats" element={<SelectSeatsPage  formValue={formValue} fligthValue={fligthValue} costValue={costValue} setCostValue={setCostValue} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
