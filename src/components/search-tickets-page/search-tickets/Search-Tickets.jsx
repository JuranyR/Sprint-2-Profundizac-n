import React, {useState} from "react";
import Avion from "../../../images/avion.jpg";
import Flecha from "../../../images/chevron-down.svg";
import Plane from "../../../images/plane.svg";
import Modal from 'react-bootstrap/Modal';
import { DatalistInput } from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import AirPorts from './airports.json';
import Passengers from '../passegers/Passengers';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const SearchTickets = ({formValue, setFormValues}) => {
    const navigate = useNavigate();
    const [showModalOrigin, setShowModalOrigen] = useState(false);
    const [showModalDestiny, setShowModalDestiny] = useState(false);
    const [showModalPssengers, setShowModalPssengers] = useState(false);
    const [origin, setOrigin] = useState();
    const codeOfert= "OFERT4"

    const handleModalOrigin = () => setShowModalOrigen(!showModalOrigin);
    const handleModalDestiny = () => setShowModalDestiny(!showModalDestiny);
    const handleModalPssengers = () => setShowModalPssengers(!showModalPssengers);
   
    const onChangeValue=(e)=>{
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value
        })
        
    }
    const validateForm=(values)=>{
        const alertError = (text) =>{
            Swal.fire(
                '',
                text,
                'error'
            )
        }
        if(!values.origen || !values.destiny  || !values.dateLeave) {
            alertError('Valide que su origen, destino, o Fechas tengan un valor');
            return false
        }
        
        if(values.travelRounded === null){
            alertError('Valide que seleccinó viaje redondo o sencillo');
            return false
        }
        if(values.travelRounded==="true" && !values.dateArrive){
            alertError('Valide que seleccinó una fecha de regreso');
            return false 
        }

        if(values.passengers.Adult===0 && values.passengers.child===0 && values.passengers.baby===0){
            alertError('Valide que seleccinó una cantidad de pasajeros');
            return false 
        }

        if(values.code && values.code.toUpperCase() !== codeOfert){
            alertError('Ingrese un código valido');
            return false 
        }

        return true
    }

    const sendForm = ()=>{
        const isValidForm= validateForm(formValue);
        if(isValidForm){
            navigate("/detail");
        }
    }

    return(
        <>
            <Modal show={showModalOrigin} centered onHide={handleModalOrigin}>
                <Modal.Header closeButton>
                    <Modal.Title>¿A dónde viajas?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatalistInput
                        value={origin}
                        setValue={setOrigin}
                        placeholder="Selecciona Origen"
                        onSelect={(item) =>{
                            setFormValues({...formValue,origen: item.name, codeOrigen:item.code});
                            handleModalOrigin();
                        }}
                        items={AirPorts.map((item,index) => ({
                            ...item,
                            node:<div className="airPorts" key={index}>
                                    <b>{item.name}</b>
                                    <span>{item.code}</span>
                                </div>,
                        }))}
                        filters={[(options, value) =>options.filter(o=> o.name.indexOf(value.charAt(0).toUpperCase() + value.slice(1)) !== -1)]}
                    />
                </Modal.Body>
            </Modal>
            <Modal show={showModalDestiny} centered onHide={handleModalDestiny}>
                <Modal.Header closeButton>
                    <Modal.Title>¿A dónde viajas?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatalistInput
                        value={origin}
                        setValue={setOrigin}
                        placeholder="Selecciona Destino"
                        onSelect={(item) =>{
                            setFormValues({...formValue,destiny: item.name,codeDestiny: item.code});
                            handleModalDestiny();
                        }}
                        items={AirPorts.map((item,index) => ({
                            ...item,
                            node:<div className="airPorts" key={index}>
                                    <b>{item.name}</b>
                                    <span>{item.code}</span>
                                </div>,
                        }))}
                        filters={[(options, value) =>options.filter(o=> o.name.indexOf(value.charAt(0).toUpperCase() + value.slice(1)) !== -1)]}
                    />
                </Modal.Body>
            </Modal>
            <Modal show={showModalPssengers} size="sm" centered onHide={handleModalPssengers}>
                <Modal.Body>
                        <Passengers  formValue={formValue}  setFormValues={setFormValues} />
                </Modal.Body>
            </Modal>
            <section className="search-ticket">
                <div className="search-ticket-form">
                    <h3>Busca un nuevo destino y comienza la aventura.</h3>
                    <span className="sub-title">Descubre vuelos al mejor precio y perfectos para cualquier viaje</span>
                    <div className="btn-group-sm" role="group" aria-label="Basic radio toggle button group" onChange={e => onChangeValue(e)}>
                        <input type="radio" className="btn-check" name="travelRounded" id="btnradio1"   value={true} />
                        <label className="btn" htmlFor="btnradio1">Viaje redondo</label>

                        <input type="radio" className="btn-check" name="travelRounded" id="btnradio2" value={false} />
                        <label className="btn" htmlFor="btnradio2">Viaje sencillo</label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button className="city" type="button"  onClick={()=>handleModalOrigin()}>{formValue.origen?formValue.origen:'---'}<span>Origen</span></button>
                        </div>
                        <div className="col-md-6">
                            <button className="city" onClick={()=>handleModalDestiny()}>{formValue.destiny?formValue.destiny:'---'}<span>Seleccione un destino</span></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" min={new Date().toISOString().split("T")[0]} id="floatingInputLeave" name="dateLeave" onChange={e => onChangeValue(e)}/>
                                <label htmlFor="floatingInputLeave">Salida</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" min={new Date().toISOString().split("T")[0]} id="floatingInputArrive"  name="dateArrive" onChange={e => onChangeValue(e)}/>
                                <label htmlFor="floatingInputArrive">Regreso</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <button className="select" onClick={()=>handleModalPssengers()} >Pasajeros
                                <span>{formValue.passengers.Adult} Adultos, {formValue.passengers.child} Niños, {formValue.passengers.baby} bebes</span>
                                <img className="icon" src={Flecha} alt="flecha" />
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingCode" placeholder="-- -- -- --" name="code" onChange={e => onChangeValue(e)} />
                                <label htmlFor="floatingCode">¿Tienes un código de promoción?</label>
                            </div>
                        </div>
                    </div>
                    <button className="searchFly" onClick={()=>{sendForm()}}>
                        <img src={Plane} alt="icon" />
                        Buscar vuelos</button>
                </div>
                <figure>
                    <img src={Avion} alt="Avión"/>
                </figure>
            </section>
        </>
    )
}

export default SearchTickets;
