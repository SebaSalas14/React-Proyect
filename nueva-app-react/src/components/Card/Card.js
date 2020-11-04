import React, { useState, useEffect } from 'react'
import "../../App.css";
import "./card.css";

/*const Card = ({ gasto, removeGasto })
 {/* <button
        className="btn btn-danger button eliminar"
        onClick={() => {removeGasto(id)}}
      >
        Eliminar &times;
      </button> */


const Card = ({ gasto, removeGasto }) => {
  const { concepto,importe, id } = gasto;
  return (
    <div className="card mb-3 gasto">
      <p>Concepto del Gasto: <span>{concepto}</span></p>
      <p>Importe del Gasto: <span>{importe}</span></p>
    <button
    className= "w-100 d-block justify-content-right btn btn-danger" onClick={() => {removeGasto(id)}}>
      Eliminar 
    </button>
    </div>
  );
}
 
export default Card;