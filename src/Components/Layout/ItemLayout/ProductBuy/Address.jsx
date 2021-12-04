import { useRef, useState } from 'react';
import './productBuyPage1.css'
import { getUserData } from '../../../../localStorage/localStorage';

export const Address=()=>{

    

    const addressFind=(!getUserData().address.length === 0)
    
    return (
        <div className="container-fluid">
            {addressFind?<DisplayAddress/>:<InputAddress/>}
        </div>
    );
}

function InputAddress(){
    const [currAddress,setAddress]=useState([{name:'',phNo:'',pCode:'',oAddress:''}])

    function inputAddress(e){
        setAddress({...currAddress,[e.target.name]:e.target.value})
    }

    function submitAddress(){
        console.log(currAddress)
        console.log(getUserData())
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

function DisplayAddress(){
    return(
        <div className="aress">
            Your address is stored
        </div>
    )
}