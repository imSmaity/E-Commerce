import './login_signin.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function submitData(userData,msg,history){
    axios({
        method:'post',
        url:`https://${process.env.REACT_APP_API_PATH}/admin/user`,
        data:{
            fname:userData.fname,
            lname:userData.lname,
            email:userData.email,
            dob:userData.dob,
            password:userData.password,
        }
    })
    .then(
        alert(msg),
        history.push('/user-login')
    )
}

function validation(userData){
    if(userData.fname !== '' && userData.lname !== '' && userData.dob !== '' && userData.email !== '' && 
    userData.password !== '' && userData.rpassword !== '' ){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
            if(userData.password.length>=8){
                if(userData.password===userData.rpassword){
                    return {valid:true,msg:'Successfully registered'}
                }
                else{
                    return {valid:false,msg:'Re-entered password are wrong!'}
                }
            }
            else{
                return {valid:false,msg:'Please enter minimum 8 characters password'}
            }
        }
        else{
            return {valid:false,msg:'Invalid email address'}
        }
    }
    else{
        return {valid:false,msg:'please fill all the input fields'}
    }
}


const Signin=()=>{
    const [data,setData]=useState({fname:'',lname:'',email:'',dob:'',password:'',rpassword:''});
    
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
        
        const validation_state=validation(data)
        if(validation_state.valid){
            axios.post(`https://${process.env.REACT_APP_API_PATH}/admin/user_find`,{email:data.email})
            .then(res=>{ 
                if(res.data===""){
                    submitData(data,validation_state.msg,history)
                }
                else{
                    alert("Email address is already registered")
                }
            })
        }
        else{
            alert(validation_state.msg)
        }
    }

    return(
       <div className="log1">
            <center>
                <form>
                    <h1>Shop.IN</h1>
            
                    <input type="text" placeholder="First name" name="fname" onChange={(e)=>changeData(e)} required/><br/>
                    <input type="text" placeholder="Last name" name="lname" onChange={(e)=>changeData(e)} required/><br/>
                    <input type='email' placeholder="Enter your e-mail" name="email" onChange={(e)=>changeData(e)} autoComplete="new-password" required/><br/>
                    <input type="date" placeholder="DOB" name="dob" onChange={(e)=>changeData(e)} required/><br/>
                    <input type='password' placeholder="Enter password" name="password" maxLength="10" onChange={(e)=>changeData(e)} autoComplete="new-password" required/><br/>
                    <input type='password' placeholder="Re-enter your password" name="rpassword" onChange={(e)=>changeData(e)} required/><br/>
                    <button type="submit" className="btn btn-dark" onClick={e=>{register(e)}}>Submit</button>
                    <Link to="/user-login">
                        <button type="button" className="btn btn-dark" style={{marginLeft:'2vh'}} >Cancel</button>
                    </Link>
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


// axios({
//     method:'post',
//     url:`https://${process.env.REACT_APP_API_PATH}/admin/user`,
//     data:{
//         fname:data.fname,
//         lname:data.lname,
//         email:data.email,
//         password:data.password,
//         repassword:data.repassword
//     }
// })
// .then(alert("Successfully signin"))