import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading, loggedIn } from '..';
import { getUserData } from '../../localStorage/localStorage';
import './address.css'

function DisplayAddress({address,setAddressIS}){
    function changeAddress(){
        setAddressIS(false)
    }
    return(
        <div className="aress">
            <h5 id="addssM">Delivery address</h5>
            <div className="addressData">
                <span>Name:{address.name}</span>
                <span>Phone Number:{address.phNo}</span>
                <span>Pin Code:{address.pCode}</span>
                <span>{address.addressLine1}</span>
            </div>
            <div>
                <button type="button" id="chBtn" className="btn btn-primary btn-sm mt-2" onClick={changeAddress}>Change Address</button>
            </div>
        </div>
    )
}
function oldAddress(){
    const userData=getUserData()
    if(!(getUserData().address===undefined)){
        return {name: userData.address.name,
            phNo: userData.address.phNo,
            pCode: userData.address.pCode,
            addressLine1: userData.address.addressLine1
        }
    }
    else{
        return {name:'',phNo:'',pCode:'',addressLine1:''}
    }
}

function setCurrAddress(currAddress){
    const userData=getUserData()
    userData.address=currAddress
    localStorage["token"]=JSON.stringify(userData)
}

function InputAddress({setAddressIS}){
    const [currAddress,setAddress]=useState(oldAddress)

    function inputAddressHandle(e){
        setAddress({...currAddress,[e.target.name]:e.target.value})
    }
    function submitAddress(){
        setCurrAddress(currAddress)
        axios({
            method:'POST',
            url:`https://${process.env.REACT_APP_API_PATH}/admin/userData_update`,
            data:{
                userData:getUserData(),
            }
        })
        .then(res=>{
            setAddressIS(true)
            alert("Your address is successfully submited.")
        })
    }
    return(
        <div className="aress">
            <h5 id="addssM">Delivery address</h5>
            <input type="text" name='name' placeholder="Full Name" value={currAddress.name} onChange={(e)=>{inputAddressHandle(e)}} />
            <input type="number" name='phNo' placeholder="Phone Number" value={currAddress.phNo} onChange={(e)=>{inputAddressHandle(e)}} />
            <input type="number" name='pCode' placeholder="Pin Code" value={currAddress.pCode} onChange={(e)=>{inputAddressHandle(e)}} />
            <textarea type="text" name='addressLine1' placeholder="Type your address" value={currAddress.addressLine1} onChange={(e)=>{inputAddressHandle(e)}} />
            <button type="button" className="btn btn-dark" onClick={submitAddress}>Submit</button>
        </div>
    )
}
function initialValue(data){
    if(loggedIn()){
        if(data.address.name!=='' &&
            data.address.phNo!=='' &&
            data.address.pCode!=='' &&
            data.address.addressLine1 !=='' 
        ){
            return true
        }
        else{
            return false
        }  
    }
    else{
        return false
    }
}

export const Address=()=>{
    const [addressIS,setAddressIS]=useState(initialValue(getUserData()))
    const history=useHistory()
    if(!loggedIn()){

        history.push('/user-login')
    }

    return (
        loggedIn()?
        <div className="container-fluid">
            {addressIS?
            <DisplayAddress address={getUserData().address} setAddressIS={setAddressIS}/>:
            <InputAddress setAddressIS={setAddressIS}/>}
        </div>:
        <Loading/>
    );
}
