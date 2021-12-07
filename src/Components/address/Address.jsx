import axios from 'axios';
import { useState } from 'react';
import { getUserData } from '../../localStorage/localStorage';
import './address.css'



function setCurrAddress(currAddress){
    // console.log("address",currAddress)
    const userData=getUserData()
    userData.address.name=currAddress.name
    userData.address.phNo=currAddress.phNo
    userData.address.pCode=currAddress.pCode
    userData.address.addressLine1=currAddress.addressLine1
    localStorage["token"]=JSON.stringify(userData)
}



function InputAddress(){
    const [currAddress,setAddress]=useState([{name:'',phNo:'',pCode:'',addressLine1:''}])

    function inputAddress(e){
        setAddress({...currAddress,[e.target.name]:e.target.value})
    }

    function submitAddress(){
        setCurrAddress(currAddress)
        window.location.reload()
        axios({
            method:'POST',
            url:'http://localhost:8080/admin/userData_update',
            data:{
                userData:getUserData(),
            }
            
        })
        .then(res=>{
            console.log("Address update",res.data)
        })
        .catch(
            console.log("DB Error!!!")
        )
    }
    return(
        <div className="aress">
            <input type="text" name='name' placeholder="Full Name" onChange={(e)=>{inputAddress(e)}} />
            <input type="number" name='phNo' placeholder="Phone Number" onChange={(e)=>{inputAddress(e)}} />
            <input type="number" name='pCode' placeholder="Pin Code" onChange={(e)=>{inputAddress(e)}} />
            <textarea type="text" name='addressLine1' placeholder="Type your address" onChange={(e)=>{inputAddress(e)}} />
            <button type="button" className="btn btn-dark" onClick={submitAddress}>Submit</button>
        </div>
    )
}

function DisplayAddress({address}){

    return(
        <div className="aress">
            <h5>Delivery address</h5>
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
function changeAddress(){
    const userData=getUserData()
    userData.address.name=""
    localStorage["token"]=JSON.stringify(userData)
    window.location.reload()
}

export const Address=()=>{

    const addressFind=getUserData().address.name===""
    return (
        <div className="container-fluid">
            {!addressFind?<DisplayAddress address={getUserData().address}/>:<InputAddress/>}
        </div>
    );
}