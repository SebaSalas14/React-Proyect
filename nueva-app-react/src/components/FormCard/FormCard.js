import React, { useState, useEffect} from 'react';
import Form from '../Form/form';
import Card from '../Card/Card';
import "./FormCard.css";


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
  //Paso un id e identifico el gasto que quiero remover y las guardo dentro de mi state setGastos(gastosactulaizados)
   const removeGasto = id => {
      const gastosActualizados = gastos.filter(gasto => gasto.id !== id );
      setGastos(gastosActualizados);
    }
  
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
           <h2 className = "text-center ">Administrador de Gastos</h2>
      <div className="container body-container">
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
                    removeGasto={removeGasto}
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