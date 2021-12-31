import { useRef, useState } from 'react';
import Footer from '../../Components/footer/Footer';
import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import './customerService.css';
import {loggedIn} from '../../Components/index'
import { useHistory } from 'react-router';


const CustomerService=()=>{
    const [question,setQuestion]=useState({status:true})
    const CustomerQuestion=useRef()
    if(!loggedIn()){
        useHistory().push('/user-login')
    }
    

    function questionSubmit(e){
        e.preventDefault()
        setQuestion({status:question.status?false:true})
    }

    return(
        <div className="row">
            <div className=" col-12">
                <Header/>
            </div>
            <div className=" col-12">
                <Navbar/>
            </div>
            <div className="col-12 cus1">
                <center>
                    <h3>Customer Service</h3>
                    {
                        question.status?
                        <div>
                            <div><input type="text" placeholder="Type your question here" id="inputQ" ref={CustomerQuestion}></input></div>
                            <button type="submit" className="btn btn-dark btn-md" id="btn1" onClick={(e)=>questionSubmit(e)}>Submit</button>
                        </div>
                            :
                        <div>
                            <div id="msg" >Your question will be answered very shortly send to you</div>
                            <button type="submit" id="btn2"  onClick={(e)=>questionSubmit(e)}>Another Question submit</button>
                        </div>
                    }
                    
                    
                </center>
            </div>
            <div className="col-12"><Footer/></div>
        </div>
    );
}

export default CustomerService;