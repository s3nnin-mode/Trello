import './App.css';
import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const refSide = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <div className='sidebar' ref={refSide}>
        <button onClick={toggleSidebar}>cerrar sidebar</button>
      </div>
    </div>
  );
}

export default App;