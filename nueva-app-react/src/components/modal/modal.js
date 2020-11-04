import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import "../Modal/Modal.css";

function ModalIngreso () {
    let s=0; 
    const [show, setShow] = useState({open:true});
    const handleClose = () =>  setShow(false);
    const [error, setError] = useState(false);
    const [saldo, setSaldo]= useState(null);

    

    const addSaldo= saldo => {
      setSaldo(saldo)
    }
    
    useEffect(() => {
      let saldoInicial = JSON.parse(localStorage.getItem('saldo'));
      if (saldoInicial !== null) 
      {
        s=1; 
        localStorage.setItem('saldo', saldo)
      } else {
        localStorage.setItem('saldo', 0);
      }
    }, [saldo]);

  const handleOnChange = e => {
    console.log(e.target.value);
    addSaldo(e.target.value);
    setError(false) 
  }
  
  if( saldo !== null){
    show.open=false;
  }
 
    return(
        <> 
        <div className="bodyModal">
        <Modal className= "modalPrincipal"
        show={show.open} 
        backdrop="static"
        keyboard={false}>
        <Modal.Header >
          <Modal.Title>Bienvenido, Ingrese el monto de su presupuesto mensual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <form > 
               <input className="modalInput" type="number" onChange={handleOnChange} min="0"  placeholder="Ingrese su saldo" required > 
               </input>              
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit"  onClick={handleClose} >
            Ingresar monto
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </>
    );
}

export default ModalIngreso;