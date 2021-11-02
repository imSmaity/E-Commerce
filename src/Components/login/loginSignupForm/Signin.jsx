import './login_signin.css';
import { Link } from 'react-router-dom';

const Signin=()=>{


    return(
       <div className="log1">
            <center>
                <h1>Shop.IN</h1>
            
                <input type="text" placeholder="First name" name="fname" onChange={changeData} required/><br/>
                <input type="text" placeholder="Second name" name="lname" onChange={changeData} required/><br/>
                <input type='email' placeholder="Enter your e-mail" name="email" onChange={changeData} required/><br/>
                <input type='password' placeholder="Enter password" name="password" maxLength="10" onChange={changeData} required/><br/>
                <input type='number' placeholder="Re-enter your password" name="repassword" onChange={changeData} required/><br/>
                <button type="submit" className="btn btn-dark" onClick={e=>{register(e)}}>Submit</button>
                <div id="tb">Have an account?
                    <Link to="/user-login">
                        <strong> Log in</strong>
                    </Link>
                </div>
             
            </center>
       </div>
    );
}

export default Signin;