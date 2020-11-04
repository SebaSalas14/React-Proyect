import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import "../Modal/Modal.css";
/* import "bootstrap/dist/css/bootstrap.css"; */

function ModalIngreso ({addMonto}) {
    const [presupuesto, setPresupuesto] = useState('')
    const [show, setShow] = useState({open:true});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState(false);


  const handleOnChange = e => {
    const numberValue = e.target.value;
    const Validation = /^([0-9])*$/;
    if(numberValue > 0 || numberValue.test(Validation) )
    {
    setPresupuesto(e.target.value);
    setError(false) }
    else{
    setError(true);}
    }
    
    const closeModal= () => {
        if (show.open) {
            show.open= false
        }
    }

    return(
        <> 

        <div className="bodyModal">
        <Modal className= "modalPrincipal"
        show={show.open} 
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido, Ingrese el monto de su presupuesto mensual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <form > 
               <input className="modalInput" type="number" value={presupuesto} onChange={handleOnChange} min="0"  placeholder="Ingrese su saldo" required
                />               
                </form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit"   >
            Ingresar monto
          </Button>
          <Button variant="secondary" onClick={handleClose}>Cancelar operacion</Button>
        </Modal.Footer>
      </Modal>
        </div>
        </>
    );
}

export default ModalIngreso;