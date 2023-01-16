import React, { useState, useEffect } from 'react'
import '../Css/App.css';

function LoginForm() {
    const [nameState, setNameState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [nameIsValid, setNameIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [nameIsTouched, setNameIsTouched] = useState(false)
    const [passwordIsTouched, setPasswordIsTouched] = useState(false)

    useEffect(()  => {
        if (nameIsValid && passwordIsValid) {
            console.log('Form is Valid')
        }
    }, [nameIsValid, passwordIsValid])


    const nameChangeHandler = (e) => {
        setNameState(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPasswordState(e.target.value)
    }

    const nameBlurHandler = (e) => {
        setNameIsTouched(true);

        if (nameState.trim() === '') {
            setNameIsValid(false)
            return;
        }
    }

    const passwordBlurHandler = (e) => {
        setPasswordIsTouched(true);
        if (passwordState.trim() === '') {
            setPasswordIsValid(false)
            return;
        }
    }
    const formSubmissionHandler = (event) => {
        event.preventDefault()
        setNameIsTouched(true);
        setPasswordIsTouched(true);
        if (nameState.trim() === '') {
            setNameIsValid(false)
            return;
        }
        if (passwordState.trim() === '') {
            setPasswordIsValid(false)
            return;
        }
        setPasswordIsValid(true);
        setNameIsValid(true);
        setPasswordState('');
        setNameState('');
    }
   
    const formInputIsinvalid = !nameIsValid && !passwordIsValid && nameIsTouched && passwordIsTouched;
    const formInputClasses = formInputIsinvalid ? 'form-control invalid' : 'form-control'

    return (
        <div id='login'>
            <header className='App-header'>
                <h1 className='App'>Login</h1>
                <form className='App' onSubmit={formSubmissionHandler}>
                    <div className={formInputClasses}>
                        <br />
                        <label className='label'>Username : </label>
                        <input type='text' value={nameState} onChange={nameChangeHandler} onBlur={nameBlurHandler} required></input>
                        <br />
                        <br />

                        <label>Password : </label>
                        <input type='text' value={passwordState}
                            onChange={passwordChangeHandler} onBlur={passwordBlurHandler} required></input>
                        <br />
                        <button type='submit' className='button' >
                            Connection
                        </button>
                    </div>
                </form>
          
            </header>
        </div>
    );
}

export default LoginForm;