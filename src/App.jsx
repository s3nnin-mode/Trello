import './App.css';
import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {Sidebar} from './componentes/sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;