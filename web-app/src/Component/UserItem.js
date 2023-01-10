
import User from './User'
import './ExpenseItem.css';

function UserItem(props) {
    onsubmit = () => {
        
    }
  return (
    <>
    <div className="login">
               <form className='form'>
                   <label >Name</label>
                   <br></br>
                   <input type="text" id="username" name="username" value=" " placeholder="Your name.."
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
    <User className='expense-item'>
      <div className='expense-item__description'>
        <label className='label'>Name : </label>
        <h2>{props.name}</h2>
        <label className='label'>Mail : </label>
        <h2>{props.email}</h2>
        <label className='label'>Age : </label>
        <div className='expense-item__price'>{props.age}</div>
      </div>
    </User>
    </>
  );
}

export default UserItem;
