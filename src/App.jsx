import './App.css';
import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Sidebar } from './componentes/sidebar.tsx';
import {Tablero } from './componentes/tablero/tablero.tsx';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Tablero />
    </div>
  );
}

export default App;