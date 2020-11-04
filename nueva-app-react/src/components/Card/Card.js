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


const Card = ({ gasto }) => {
  const { concepto,importe, id } = gasto;
  return (
    <div className="card mb-3 gasto">
      <p>Concepto del Gasto: <span>{concepto}</span></p>
      <p>Importe del Gasto: <span>{importe}</span></p>
    </div>
  );
}
 
export default Card;