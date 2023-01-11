
import React from 'react';

const Personnage = (props)  =>{ 
return(
        <li>
            <h3>{props.name}</h3>
            <p>{props.gender}</p>
            <p>{props.height}</p>
        </li>
)
}
export default Personnage;