import axios from 'axios';
import { useState } from 'react';
import { getUserData } from '../../../../localStorage/localStorage';
import './address.css'



function InputAddress(){
    const [currAddress,setAddress]=useState([{name:'',phNo:'',pCode:'',oAddress:''}])

    function inputAddress(e){
        setAddress({...currAddress,[e.target.name]:e.target.value})
    }

    function submitAddress(){
        const userData=getUserData()
        userData.address=[]
        userData.address=currAddress
        localStorage["token"]=JSON.stringify(userData)
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
            <textarea type="text" name='oAddress' placeholder="Type your address" onChange={(e)=>{inputAddress(e)}} />
            <button type="button" className="btn btn-dark" onClick={submitAddress}>Submit</button>
        </div>
    )
}

function DisplayAddress({address}){

    return(
        <div className="aress">
            <div>Name:{address.name}</div>
            <div>Phone Number:{address.phNo}</div>
            <div>Pin Code:{address.pCode}</div>
            <div>{address.oAddress}</div>

        </div>
    )
}

export const Address=()=>{

    const addressFind=getUserData().address.length!==0
    return (
        <div className="container-fluid">
            {addressFind?<DisplayAddress address={getUserData().address}/>:<InputAddress/>}
        </div>
    );
}