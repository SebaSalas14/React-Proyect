
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import "../Modal/Modal.css";
/* import "bootstrap/dist/css/bootstrap.css"; */

function ModalIngreso ({addMonto}) {
    const [show, setShow] = useState({open:true});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [error, setError] = useState(false);
  const [presupuesto, setPresupuesto] = useState({
    monto: '',
   
  })

  const{monto}  = presupuesto;

  const handleOnChange = e => {
    setPresupuesto({
      ...presupuesto,
      [e.target.name]: e.target.value
    })
  }

    const handleOnSubmit = e => {
      e.preventDefault();
      if(presupuesto.trim() === '' ) {
        setError(true);
        return
      }
      setError(false);
      /* gasto.id = uuid(); */
       addMonto(presupuesto);
      setPresupuesto({
        monto: '',
      })
    }
    return(
        <> 

        <div >
        <Modal className= "modalPrincipal"
       
        show={show.open}
        onHide={handleShow}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido, Ingrese el monto de su presupuesto mensual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <form onSubmit={handleOnSubmit} > 
               <input className="modalInput" type="number"  min="0"  placeholder="Ingrese su saldo" required
               onChange={handleOnChange}
                />               
                </form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit"   >
            Ingresar presupuesto
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
        </>
    );
}

export default ModalIngreso;