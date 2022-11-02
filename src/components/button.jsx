import React from 'react';
import '../App.css';

function Button(props) {
    

    
    return (
        <>    
            <button onClick={props.click} className={props.className} name={props.name}>{props.name}</button>
        </>    
     );
}

export default Button;