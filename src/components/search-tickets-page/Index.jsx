import React from "react";
import SearchTickets from "./search-tickets/Search-Tickets";
import Payment from "./payment/Payment";
import ServicesAvailables from "./services-availables/Services-availables";

const SearchTicketsPage = ({formValue, setFormValues}) => {
    return(
        <>
            <SearchTickets  formValue={formValue}  setFormValues={setFormValues}/>
            <Payment />
            <ServicesAvailables />
        </>
        
        
    )
}

export default SearchTicketsPage;