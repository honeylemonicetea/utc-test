import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PopUpWindow from './components/calculate';
 

function App() {
  let [popUpState, setPopUpState] = useState("closed")
  
  let openPopUp = ()=>{
    setPopUpState("open")
  
  }
  
  return (
    <div className="App">
        <button className='calculate-button' onClick={openPopUp}>Расчет платежей</button>
        <PopUpWindow popUpState={popUpState} setPopUpState={setPopUpState}></PopUpWindow>
        
    </div>
  );
}

export default App;
