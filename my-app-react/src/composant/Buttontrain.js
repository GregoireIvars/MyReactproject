import '../css/register.css';
import '../css/App.css';
import React, { useState } from 'react';
import styled from 'styled-components'; // package styled pour les bouton 

const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 2;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Cash', 'Credit Card', 'Bitcoin'];


function Buttontrain() {
  const [active, setActive] = useState(types[0]); // hook button

  return (
    <div className='App'>
      <h2>Lets go !</h2>
      <ButtonGroup className='button'>
        
        {types.map(type => (
          <ButtonToggle
          
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
            <p>Your payement est {type} </p>
          </ButtonToggle>
        ))}
        
         
      </ButtonGroup>
      
    </div>
  );
}

export default Buttontrain;
