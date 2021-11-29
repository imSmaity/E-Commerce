import './login_signin.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signin=()=>{
    const [data,setData]=useState({fname:'',lname:'',email:'',password:'',repassword:''});
    
    const history=useHistory();
    const token=localStorage.getItem("token")
    
    let loggedIn=true;
    if(token === null){
        loggedIn=false
    }
    if(loggedIn){
        history.push('/')
    }

    function changeData(e){
        setData({...data,[e.target.name]:e.target.value})
    }

    function register(e){
        e.preventDefault();
        axios({
            method:'post',
            url:'http://localhost:8080/admin/user',
            data:{
                fname:data.fname,
                lname:data.lname,
                email:data.email,
                password:data.password,
                repassword:data.repassword
            }
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        history.push('/user-login');
    }

    return(
       <div className="log1">
            <center>
                <form>
                    <h1>Shop.IN</h1>
            
                    <input type="text" placeholder="First name" name="fname" onChange={(e)=>changeData(e)} required/><br/>
                    <input type="text" placeholder="Second name" name="lname" onChange={(e)=>changeData(e)} required/><br/>
                    <input type='email' placeholder="Enter your e-mail" name="email" onChange={(e)=>changeData(e)} autoComplete="new-password" required/><br/>
                    <input type='password' placeholder="Enter password" name="password" maxLength="10" onChange={(e)=>changeData(e)} autoComplete="new-password" required/><br/>
                    <input type='password' placeholder="Re-enter your password" name="repassword" onChange={(e)=>changeData(e)} required/><br/>
                    <button type="submit" className="btn btn-dark" onClick={e=>{register(e)}}>Submit</button>
                </form>
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