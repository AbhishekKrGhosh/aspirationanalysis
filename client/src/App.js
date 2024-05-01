import './App.css';
import { useState } from 'react';
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  const [dark, setDark] = useState(true)
  const [threeD, setThreeD] = useState(true)
  return (
    <div style={dark?{background:'black', color:'white'}:{background:'white', color:'black'}}>
      {/* <Landing dark={dark} setDark={setDark} threeD={threeD} setThreeD={setThreeD}/> */}
      <Dashboard  dark={dark} setDark={setDark} threeD={threeD} setThreeD={setThreeD}/>
    </div>
  );
}

export default App;
