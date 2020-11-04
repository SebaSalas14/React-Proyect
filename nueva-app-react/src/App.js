import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
/* import './App.css'; */
import "bootstrap/dist/css/bootstrap.css";
import Modal from './components/Modal/Modal';
import FormCard from './components/FormCard/FormCard';
import './index.css';


function App() {
  
  return (
    <>

    <Modal />
    <FormCard />
    
   </>

  );
}

export default App;

/*<Modal/> */