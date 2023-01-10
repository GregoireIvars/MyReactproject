import React from 'react';
import '../css/App.css';
import Expenses from './Expenses'
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
class Login extends React.Component {
    
    constructor(props) {
        super(props); //En JavaScript, super fait référence au constructeur de la classe parente.
        // (Dans notre exemple, ça pointe sur l’implémentation de React.Component.)
        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputPassword = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    Connected (isConnected) {
        if(isConnected !== true){
            <Login /> 
        }
        <Expenses items={expenses} /> 
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.inputName.current.value);
        this.isConnected = true;
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.inputName} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" ref={this.inputEmail} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" ref={this.inputPassword} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Login