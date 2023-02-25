import React from "react";
import Amex from "../../../images/Amex.svg";
import Paypal from "../../../images/paypal.svg";
import Invex from "../../../images/banco.jpg";
import Master from "../../../images/Mastercard.svg";
import Visa from "../../../images/Visa.svg";
import Oxxo from "../../../images/oxxo.svg";
import SevenEleven from "../../../images/7-eleven.svg";
import Walmart from "../../../images/walmart.svg";
import Farmacias from "../../../images/farmacias.svg"

const Payment = () => {
    return(
        <>
            <h2 className="title-payment">Pago seguro</h2>
            <section className="payment">
                <div>
                    <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
                    <figure>
                        <img src={Amex} alt="icon"  />
                        <img src={Paypal} alt="icon" />
                        <img src={Invex}  alt="icon"/>
                        <img src={Master}  alt="icon"/>
                        <img src={Visa}  alt="icon" />
                    </figure>
                </div>
                <div>
                    <p>Efectivo en cualquiera de las sucursales participantes</p>
                    <figure>
                        <img src={Oxxo} alt="icon" />
                        <img src={SevenEleven} alt="icon" />
                        <img src={Walmart}  alt="icon" />
                        <img src={Farmacias} alt="icon" />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Payment;