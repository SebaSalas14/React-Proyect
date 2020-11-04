import React, { useState } from 'react';



const Form = ({ addGasto }) => {

  const [error, setError] = useState(false);
  const [gasto, setGasto] = useState({
    concepto: '',
    importe: ''
  })

  const { concepto, importe } = gasto;

  const handleOnChange = e => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if(concepto.trim() === '' || importe.trim() === '' ) {
      setError(true);
      return
    }
    setError(false);
    /*cita.id = uuid();*/
    addGasto(gasto);
    setGasto({
      concepto: '',
      importe: ''
    })
  }

  return (
    <>
      <h2>Crear Gasto</h2>
      {
        error ?
        <p className="alert alert-danger">Todos los campos son obligatorios</p>
        : null
      }
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Concepto gasto</label>
          <input
            type="text"
            name="concepto"
            className="form-control"
            onChange={handleOnChange}
            value={concepto}
          />
        </div>
        <div className="form-group">
          <label>Importe Gasto</label>
          <input
            type="text"
            name="importe"
            className="form-control"
            value={importe}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button type="submit" className="w-30 d-block btn btn-success">
            Añadir gasto
          </button>
        </div>
      </form>
    </>
  );
}
 
export default Form;