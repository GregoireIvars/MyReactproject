
import React from 'react';

const Personnage = (props)  =>{ 
return(
        <li>
            <h3>{props.id}</h3>
            <h3>{props.name}</h3>
        </li>
)
}
export default Personnage;