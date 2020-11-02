
import { Modal, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import "./modal.css";
import "bootstrap/dist/css/bootstrap.css";

function ModalIngreso () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    /*Aqui deberia ir link?
    <Link to = "Form"></Link>*/
    const handleShow = () => setShow(true);
    
    return(
        <> 
        <div className="bodyModal">
        <div className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}>  
        {/* <Button className="botonModal"  onClick= {handleShow}>
         Bienvenido, Haga click para ingresar su saldo 
        </Button> */}
        </div>

        <Modal className= "modalPrincipal"
        show={show}
        onHide={handleShow}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido, Ingrese el monto de su presupuesto mensual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
                     <input className="modalInput" type="number"  min="0"  placeholder="Ingrese su saldo" required> 
                    </input>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" >
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