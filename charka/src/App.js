import React from 'react';
import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { InputRightElement } from '@chakra-ui/react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)  

  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type='email' input />
      <FormHelperText>We'll never share your email.</FormHelperText>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Text mb='8px'>Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </FormControl>

  );
}

export default App;
