import React from 'react';

function Courses(props){
     return (
        <div>
             <ol><strong>
                 
                 <li>{props.AI}         {props.AIlogo}</li>

                 <br/>
                 <br/>

                 <hr/>

            
                 
            
                 <li>{props.CNC} {props.CNClogo}</li>

                 <br/>
                 <br/>
             

                 <hr/>

               
                 
        
                 <li>{props.IOT} {props.IOTlogo}</li>

                 <br/>
                 <br/>
          

                 <hr/>

             
                 
                 
                 <li>{props.BCC} {props.BCClogo}</li>

                 <br/>
                 <br/>
    

                 <hr/>
                 
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