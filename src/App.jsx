import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTicketsPage from "./components/search-tickets-page/Index";
import DetailFlighhtPage from "./components/detail-flight-page/Index";
import SelectSeatsPage from './components/select-seats-page/Index';

import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchTicketsPage />} />
                <Route path="/detail" element={<DetailFlighhtPage />} />
                <Route path="/seats" element={<SelectSeatsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
