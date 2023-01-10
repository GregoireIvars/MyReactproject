
import '../css/register.css'


function Register() {
    return (
        <div className="registerForm">
            <h2>Register</h2>
            <form className='formText'>
                <br />
                <label>First Name : </label>
                <br />
                <input type="text" id="firstName" required onChange></input>
                <br />
                <label>Last Name :  </label>
                <br />
                <input type="text" id="lastName" required onChange></input>
                <br />
                <label>Email : </label>
                <br />
                <input type="email" id="email" required></input>
                <br />
                <label>Age :</label>
                <br />
                <input type="number" id="age" required></input>
                <br />
                <label>Password : </label>
                <br />
                <input type="password" id="password" required></input>
                <br />
                <label>Confirm Password : </label>
                <br />
                <input type="password" id="confpassword" required></input>
                <br />
                <br />

                <input type="submit" value="Sign in" className='button' />
                <br />
                <br />

            </form>
        </div>
    );
}
export default Register;