import React from 'react'
import "../../App.css";
import "./card.css";


const Card = ({ gasto, removeGasto }) => {
  const { concepto,importe, id } = gasto;
  return (
    <div className="card mb-3 gasto">
      <p className="conceptos"> <b> Concepto del Gasto:</b> <span>{concepto}</span></p>
      <p className="conceptos"> <b> Importe del Gasto: </b> <span>{importe}</span></p>
    <button
    className= "w-100 d-block justify-content-right btn btn-danger" onClick={() => {removeGasto(id)}}>
      Eliminar 
    </button>
    </div>
  );
}
 
export default Card;