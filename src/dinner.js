import React from'react';


function Dinner(props){
    return (
        <div>
            <h1><strong>Today we are serving {props.dishName}</strong></h1>
            <h1><strong>Today we are serving {props.sweetDish}</strong></h1>
        </div>
        
    )
}

export default Dinner;