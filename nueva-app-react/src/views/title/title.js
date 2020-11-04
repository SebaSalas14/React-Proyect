import React, {useState} from 'react';
import ModalIngreso from '../../components/Modal/Modal2';


const AdminPage = () => {
    /*Definiendo estado y modificador de estado: bugdetValue*/
    const [addMonto, setAddMonto] = useState(0);

    return ( 
    <div> 
        <p>Presupuesto: ${addMonto}</p>
        <ModalIngreso sendBudgetValue={setAddMonto}/>    
    </div>
    )
}

export default AdminPage;