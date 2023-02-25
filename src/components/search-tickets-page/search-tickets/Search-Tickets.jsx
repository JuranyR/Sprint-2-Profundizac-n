import React from "react";
import Avion from "../../../images/avion.jpg";
import Flecha from "../../../images/chevron-down.svg";
import Plane from "../../../images/plane.svg";

const SearchTickets = () => {
    return(
        <section className="search-ticket">
            <form className="search-ticket-form">
                <h3>Busca un nuevo destino y comienza la aventura.</h3>
                <span className="sub-title">Descubre vuelos al mejor precio y perfectos para cualquier viaje</span>
                <div class="btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                    <label class="btn" for="btnradio1">Viaje redondo</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                    <label class="btn" for="btnradio2">Viaje sencillo</label>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button className="city">Ciudad de México<span>Origen</span></button>
                    </div>
                    <div class="col-md-6">
                        <button className="city">---<span>Seleccione un destino</span></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingInputLeave" />
                            <label for="floatingInputLeave">Salida</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingInputArrive" />
                            <label for="floatingInputArrive">Regreso</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button className="select">Pasajeros
                            <span>1 adulto</span>
                            <img className="icon" src={Flecha} alt="flecha" />
                    </button>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingCode" value="-- -- -- --" />
                            <label for="floatingCode">¿Tienes un código de promoción?</label>
                        </div>
                    </div>
                </div>
                <button className="searchFly">
                    <img src={Plane} alt="icon" />
                    Buscar vuelos</button>
            </form>
            <figure>
                <img src={Avion} alt="Avión"/>
            </figure>
        </section>
    )
}

export default SearchTickets;