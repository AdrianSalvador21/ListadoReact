import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const empleado = {
    nombre: 'Adrian',
    trabajo: 'Desarrollador Web'
  };

  return (
      <div>
        <h1>{empleado.nombre}</h1>
        <p>{empleado.trabajo}</p>
      </div>
  );
}

export default App;
