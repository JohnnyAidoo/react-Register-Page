import React from 'react';
import { useState } from 'react';

function Display({show}) {
    let [number ,setnumber] = useState([])

    return ( 
        <>
        <div className='display'>
            <p>{show}</p>
        </div>
        </>
     );
}

export default Display;