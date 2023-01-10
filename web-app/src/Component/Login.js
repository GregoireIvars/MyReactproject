import React, { useState } from 'react';
import '../App.css';

function Login() {
 
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login