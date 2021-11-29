import './login_signin.css';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Login=()=>{
    const [data,setData]=useState({email:'',password:''});
    
    const history=useHistory();


    //............................................. Check the user are login or not--!
    const token=localStorage.getItem("token")
    
    let loggedIn=true;
    if(token === null){
        loggedIn=false
    }
    if(loggedIn){
        history.push('/')
    }

    //.............................................. User login data set and check e-id and passwd--!
    function changeData(e){
        setData({...data,[e.target.name]:e.target.value})
    }

    function userLogin(e){
        e.preventDefault();
        axios({
            method:'post',
            url:'http://localhost:8080/admin/user_login',
            data:{
                email:data.email,
            }
        })
        .then(res=>{

            if(res.data.password === data.password){
                localStorage.setItem("token",JSON.stringify(res.data))

                history.push('/')
            }
            else{
                
                document.getElementById('errMsg').innerText="Enter valid e-mail and password"
                document.getElementById('errMsg').style.color="red"
            }
            
        })
        .catch(()=>{
            document.getElementById('errMsg').innerText="Enter valid e-mail and password"
            document.getElementById('errMsg').style.color="red"
        })

        // const token=localStorage.getItem("token")
        // const userData=JSON.parse(token)

    }

   
    return(
       <div className="log1">
            <center>
                <h1>Shop.IN</h1>
                <input type='email' name="email" placeholder="E-mail" onChange={(e)=>changeData(e)} /><br/>
                <input type='password' name="password" placeholder="Password" onChange={(e)=>changeData(e)} /><br/>
                <div id='errMsg'></div>
                <button type="submit" className="btn btn-dark" onClick={e=>userLogin(e)}>Login</button>
                <div id="tb">Don't have an account?<Link to="/user-signin"><strong> Sign Up</strong></Link></div>
            </center>
       </div>
    );
}

export default Login;