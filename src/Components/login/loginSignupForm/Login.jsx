import './login_signin.css';
import { Link } from 'react-router-dom';

const Login=()=>{
    return(
       <div className="log1">
            <center>
                <h1>Shop.IN</h1>
                <input type='email' placeholder="E-mail" required/><br/>
                <input type='password' placeholder="Password" required/><br/>
                <button type="submit" className="btn btn-dark">Login</button>
                <div id="tb">Don't have an account?<Link to="/user-signin"> Sign Up</Link></div>
            </center>
       </div>
    );
}

export default Login;