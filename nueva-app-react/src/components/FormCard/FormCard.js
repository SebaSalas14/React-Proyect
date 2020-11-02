import React, { useState, useEffect} from 'react';
/*import { v4 as uuid } from 'uuid';*/
import Form from '../Form/Form';
import Card from '../Card/Card';


const FormCard = () => {

    let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
    if(!gastosIniciales) {
      gastosIniciales = [];
    }
    const [gastos, setGastos] = useState(gastosIniciales);
  
    const addGasto = gasto => {
      setGastos([
        ...gastos,
        gasto
      ]);
    }
  
   /* const removeGasto = id => {
      const gastosActualizados = gastos.filter(gasto => gasto.id !== id );
      setGastos(gastoActualizados);
    }*/
  
    useEffect(() => {
      let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
  
      if (gastosIniciales) {
        localStorage.setItem('gastos', JSON.stringify(gastos))
      } else {
        localStorage.setItem('gastos', JSON.stringify([]));
      }
    }, [gastos]);
  
    const title = gastos.length === 0 ? 'Anade un nuevo gasto' : 'Administrar gastos';
  

  return (
    <>
           <h1>Administrador de Gastos</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Form addGasto={addGasto} />
          </div>
          <div className="col-6">
            <h2>{title}</h2>
            {
              gastos.length > 0 ?
              gastos.map((gasto, index) => {
                return (
                  <Card
                    key={index}
                    gasto={gasto}
                    /*removeGasto={removeGasto}*/
                  />
                )
              })
              : null
            }
          </div>
        </div>
      </div>
    </>
  );
}
 
export default FormCard;