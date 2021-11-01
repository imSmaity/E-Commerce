import './login_signin.css';

const Signin=()=>{
    return(
       <div className="log1">
            <center>
                <h1>Shop.IN</h1>
            
                <input type="text" placeholder="First name" required/><br/>
                <input type="text" placeholder="Second name" required/><br/>
                <input type='email' placeholder="Enter your e-mail" required/><br/>
                <input type='password' placeholder="Enter password" maxLength="10" required/><br/>
                <input type='number' placeholder="Re-enter your password" required/><br/>
                <button type="submit" className="btn btn-dark">Submit</button>
                <button  id="scbtn" className="btn btn-dark">Cancel</button>
             
            </center>
       </div>
    );
}

export default Signin;