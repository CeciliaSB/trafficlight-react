import React, { useState } from 'react';
import './App.css';


function App() {
  const [activateglow, setActivateglow] = useState("");
  
  return (  
      <div className="trafficlight">
        <div className="pole"></div>
          <div className="container">
              <div className={"light red" + (activateglow ==="red" ? " activateglow" : "")} onClick={() =>{setActivateglow("red")}}></div>
              <div className={"light yellow" + (activateglow ==="yellow" ? " activateglow" : "")} onClick={() =>{setActivateglow("yellow")}}></div>
              <div className={"light green" + (activateglow ==="green" ? " activateglow" : "")} onClick={() =>{setActivateglow("green")}}></div>             
          </div>
      </div>  
  );
}

export default App;
