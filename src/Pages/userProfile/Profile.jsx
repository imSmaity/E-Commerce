import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Address, Footer, Header, loggedIn, Navbar} from '../../Components/index'
import { getUserData } from '../../localStorage/localStorage';
import './profile.css'

const ProfileStatus=({edit,editProfile,userInputHandle,updateValue,submit,cancel})=>{
    const USER_DATA=getUserData()
    if(!edit && loggedIn()){
        return(
            <>
                <div>Name: {`${USER_DATA.fname} ${USER_DATA.lname}`}</div>
                <div>E-mail: {USER_DATA.email}</div>
                Address: 
                <div id='paddress'>
                    <Address/>
                </div>
                <div className='mt-3'>
                    <button type='button' onClick={editProfile}>Edit profile</button>
                </div>
            </>
        )
    }
    else if(loggedIn()){
        return (
            <>
                <div className='mt-2'>First name: <input type={"text"} name={"fname"} value={updateValue.fname} onChange={userInputHandle}/></div>
                <div className='mt-2'>Last name: <input type={"text"} name={"lname"} value={updateValue.lname} onChange={userInputHandle} /></div>
                <div className='mt-2'>E-mail: <input type={"email"} value={updateValue.email } readOnly/></div>
                <div className='mt-3'>
                    <button type='submit' onClick={submit} >Submit</button>
                    <button type='submit' style={{marginLeft:'1vh'}} onClick={cancel} >Cancel</button>
                </div>
            </>
        )
    }
    else{
        return <div>Loading...</div>
    }
}

export default function Profile(){
    
    const USER_DATA=getUserData()
    const [edit,setEdit]=useState(false)
    const history=useHistory()
    const [updateValue,setUpdateValue]=useState(initialData())
    function initialData(){
        if(!loggedIn()){
            history.push('/user-login')
        }
        else{
            return {fname:USER_DATA.fname,lname:USER_DATA.lname,email:USER_DATA.email}
        }
    }
        
    

    function editProfile(){
        setEdit(true)
    }
    function userInputHandle(e){
        setUpdateValue({...updateValue,[e.target.name]:e.target.value})
    }
    function submit(){
        USER_DATA.fname=updateValue.fname
        USER_DATA.lname=updateValue.lname
        localStorage["token"]=JSON.stringify(USER_DATA)
        axios({
            method:'POST',
            url:`https://${process.env.REACT_APP_API_PATH}/admin/userData_update`,
            data:{
                userData:getUserData(),
            }
            
        })
        .then(setEdit(false))
        .catch(
            console.log("DB Error!!!")
        )
    }
    function cancel(){
        setEdit(false)
    }
    return(
        <div className='row'>
            <div className='col-12'><Header/></div>
            <div className='col-12'><Navbar/></div>
            <div className="col-md-4"></div>
            <div className="col-md-4 col-12" style={{marginTop:'25vh'}}>
                <ProfileStatus 
                    edit={edit} 
                    editProfile={editProfile} 
                    updateValue={updateValue}
                    submit={submit} 
                    cancel={cancel} 
                    userInputHandle={e=>userInputHandle(e)}
                />
            </div>
            <div className="col-md-4 "></div>
            <div className='col-12'><Footer/></div>
        </div>
    );
}