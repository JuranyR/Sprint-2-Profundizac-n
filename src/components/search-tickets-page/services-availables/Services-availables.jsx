import React from "react";
import Car from  "../../../images/car.svg";
import VuelosHoteles from "../../../images/travel.svg";
import Grupos from "../../../images/group.svg";
import Hoteles from "../../../images/hotel.svg";
import Carga from "../../../images/inventory.svg"

const services= [
    {
        img: Car,
        title: 'Transporte',
        desription: 'Renta un auto o reserva un shuttle'
    },
    {
        img: VuelosHoteles,
        title: 'Vuelos + Hoteles',
        desription: 'Encuentra las mejores ofertas para tu viaje'
    },
    {
        img: Grupos,
        title: 'Grupos',
        desription: 'Obtén una cotización para grupos de más de 9 personas'
    },
    {
        img: Hoteles,
        title: 'Hoteles',
        desription: 'Reserva cuarquier habitación e cualquier parte del mundo'
    },
    {
        img: Carga,
        title: 'Carga',
        desription: 'Contamos con servicio de carga y mensajería'
    },
]

const ServicesAvailables = () => {

    return(
        <>
            <h2 className="title-services">Servicios disponibles</h2>
            <section className="sevices-availables">
                {
                    services.map(elem=>(
                        <div className="card">
                            <figure>
                                <img src={elem.img} alt="sevices"/>
                            </figure>
                            <span>{elem.title}</span>
                            <p>{elem.desription}</p>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default ServicesAvailables;