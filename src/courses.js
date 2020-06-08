import React from 'react';
import AI from './AI.jpg';
import CNC from './CNC.jpg';
import BCC from './BCC.jpg';
import IOT from './IOT.jpg';

function Courses(props){
     return (
        <div>
             <ol><strong>
                 <div>
                 <li>{props.AI}         {props.AIlogo}</li>

                 <br/>
                 <br/>

                 <hr/>

                 </div>
                 
                 <div>
                 <li>{props.CNC} {props.CNClogo}</li>

                 <br/>
                 <br/>
             

                 <hr/>

                 </div>
                 
                 <div>
                 <li>{props.IOT} {props.IOTlogo}</li>

                 <br/>
                 <br/>
          

                 <hr/>

                 </div>
                 
                 <div>
                 <li>{props.BCC} {props.BCClogo}</li>

                 <br/>
                 <br/>
    

                 <hr/>
                 </div>

             </strong></ol>
        </div>
     )
}

export default Courses;



/*import React from 'react';
import Logos from'./logos.js';

function Courses(props){
     return (
        <div>
             <ol><strong>
                 <div>
                 <li><strong>{props.AIlogo}<Logos AI></Logos></strong></li>>
                 </div>
                 
                 <div>
                 <li><strong><Logos CNC></Logos>{props.CNClogo}</strong></li>

                 </div>
                 
                 <div>
                 <li><strong><Logos IOT></Logos>{props.IOTlogo}</strong></li>

                 </div>
                 
                 <div>
                 <li><strong><Logos BCC></Logos>{props.BCClogo}</strong></li>
                 </div>

             </strong></ol>
        </div>
     )
}

export default Courses;*/