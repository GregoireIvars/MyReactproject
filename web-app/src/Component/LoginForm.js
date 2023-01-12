
import './ExpenseItem.css';
import LoginInput from './LoginInput';

function LoginForm(props) {
  onsubmit = () => {

  }
  return (
    <>
      <div className="login">
        <form className='form'>
          <label >Name</label>
          <br></br>
          <input type="text" id="username" name="username" placeholder="Your name.."
            required></input>
          <br></br>
          <label >Email</label>
          <br></br>
          <input type="text" id="email" name="email" placeholder="Your email.."
            required></input>
          <br></br>
          <label >Age</label>
          <br></br>
          <input type="number" id="age" name="age" placeholder="Your age.."
            required></input>
          <br></br>
          <label >Password</label>
          <br></br>
          <input type="password" id="password" name="password" placeholder="Your password.."
            required></input>
          <br></br>
          <button id="submit" >Submit</button>
        </form>
      </div>
      
    </>
  );
}

export default LoginForm;
