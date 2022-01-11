import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

function setNewData(userData,newPassword,navigate){

    axios.post(`https://${process.env.REACT_APP_API_PATH}/admin/forgot_password`,{
        _id:userData.email,
        fname:userData.fname,
        lname:userData.lname,
        email:userData.email,
        dob:userData.dob,
        password:newPassword,
        address:userData.address,
        cart_items:userData.cart_items,
        orders:userData.orders,
        pending_orders:userData.pending_orders,
        date:userData.date
    })
    .then(res=>{
        if(res.data.success){
            alert("Your password has been reset successfully")
            navigate.push('/user-login')
        }
    })

}



export default function ForgotPassword() {
    const history=useHistory()
    const [validUser,setValidUser]=useState(false)
    const [userData,setUserData]=useState("")
    const email=useRef(null)
    const dob=useRef(null)
    const password=useRef(null)
    const rePassword=useRef(null)

    function findUser(){
        if(email.current.value!=="" && dob.current.value!==""){
            axios.post(`https://${process.env.REACT_APP_API_PATH}/admin/user_find`,{email:email.current.value})
            .then(
                (res)=>{
                    if(res.data!==""){
                        if(res.data.dob===dob.current.value){
                            setUserData(res.data)
                            setValidUser(true)
                        }
                        else{
                            alert("Your email or date of birth is incorrect, please try again.")
                        }
                    }
                    else{
                        alert("Your email or date of birth is incorrect, please try again.")
                    }
                }
            )
        }
        else{
            alert("please fill all the input fields!")
        }
    }
    
    function setNewPassword(){
        if(password.current.value!=="" && rePassword.current.value!==""){
            if(password.current.value===rePassword.current.value){
                setNewData(userData,password.current.value,history)
            }
            else{
                alert('Re-entered password are wrong!')
            }
        }
        else{
            alert("please fill all the input fields!")
        }
    }

    return (
        <div className='row'> 
            <div className='col-12'>
                <center>
                    <h3 >My destination</h3>
                    {!validUser?
                        <>
                            <div className='mt-5'>
                                E-mail: 
                                <input type="email" ref={email}/>
                            </div>
                            <div className='mt-2'> 
                                What is your date of birth?
                                <input type="date" ref={dob}/>
                            </div>
                            <div className='mt-3'>
                                <button type="button" className="btn btn-primary btn-sm" onClick={findUser}>Check</button>
                            </div>
                        </>:
                        <>
                            <div className='mt-5'>
                                <label>New Password:</label>
                                <input type="password" ref={password} />
                            </div>
                            <div className='mt-2'>
                                <label>Re-enter Password:</label>
                                <input type="text" ref={rePassword} />
                            </div>
                            <div className='mt-3'>
                                <button type="submit" className="btn btn-dark btn-sm" onClick={setNewPassword}>Submit</button>
                            </div>
                        </>
                    }
                    
                </center>
            </div>
        </div>
    )
}
