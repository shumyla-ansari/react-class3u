import React from 'react';

import './App.css';
import Courses from './courses.js';
import AI from './AI.jpg';
import CNC from './CNC.jpg';
import BCC from './BCC.jpg';
import IOT from './IOT.jpg';


function App() {
  return (
  <div>
  <h1><strong>This Is React-based-App</strong></h1>

  <hr /> 
  <Courses AI={"Artificial Intelligence"} AIlogo = {<img src={AI} height="100" width="150" title="AI" align="middle"/>}
  CNC={"Cloud Native and Cloud Computing"} CNClogo={<img src={CNC} height="100" width="150" title="CNC" align="middle" ></img>} 
  IOT={"Internet Of Things"} IOTlogo={<img src={IOT} height="100" width="150" title="IOT" align="middle" ></img>}
  BCC={"BlockChain"} BCClogo={<img src={BCC} height="100" width="150" title="BCC" align="middle" ></img>}/>
  </div>

 /* <div>
    <h1>This is date (to date child component)</h1>
    <Date 
  </div>

  */
  );
    
}


export default App;
