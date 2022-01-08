import { PriceDetails } from "../../../Components/PriceDetails/PriceDetails"
import Header from '../../../Components/header/Header'
import Navbar from "../../../Components/navbar/Navbar"
import Footer from '../../../Components/footer/Footer'
import { OrderingItem } from "../../../Components/orderingItem/OrderingItem"
import {  useRouteMatch, useHistory } from "react-router-dom"
import './productBuyPage2.css'
import axios from 'axios'
import { getUserData } from "../../../localStorage/localStorage"
import { Loading, loggedIn, PayPal } from "../../../Components"
import { useState } from "react"
import './productBuyPage2.css'

export const PaymentOptions=()=>{
    const [currPaymentOption,setCurrOption]=useState("")


    const {url}=useRouteMatch()
    const userData=getUserData()
    const history=useHistory()

    if(!loggedIn()){

        history.push('/user-login')
    }
    function paymentOptionInput(e){
        setCurrOption(e.target.value)
    }

    function confirmOrder(){

        if(currPaymentOption==="COD"){
            userData.pending_orders.map((val)=>{
                userData.orders.push(val)
            })
            userData.cart_items=[]
            localStorage["token"]=JSON.stringify(userData)

            axios({
                method:'POST',
                url:`https://${process.env.REACT_APP_API_PATH}/admin/userData_update`,
                data:{
                    userData:getUserData(),
                }
            })
            .then(
                history.push(`${url}/confirm_order`)
            )
        }
        else if(currPaymentOption==="PAYPAL"){
            history.push(`${url}/paypal_payment`)
        }
        else{
            alert('Please select a payment method for your order.')
        }
    }

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12 cba">
                <h5>Delivery address</h5>
                <div>Name: {getUserData().address.name}
                    <span id="aml">Phone: {getUserData().address.phNo}</span>
                    <span id="aml">PIN: {getUserData().address.pCode}</span>
                </div>
                <div>{getUserData().address.addressLine1}</div>
            </div>
            {
                loggedIn()?
                <>
                    <div className="col-md-8 col-12">
                        <OrderingItem pendingOrder={userData.pending_orders}/>
                    </div>
                    <div className="col-md-4 col-12 mt-3">
                        <PriceDetails pendingOrder={userData.pending_orders}/>
                    </div>
                    <div className="col-12 mt-3">
                        <div><strong>PAYMENT OPTIONS</strong></div>
                        <div  style={{marginLeft:'2vh',marginTop:'2vh'}}>
                            
                            <input type="radio" name="pOption" value={"COD"} style={{marginRight:'1vh'}} onChange={paymentOptionInput}/>
                            <span >Cash on Delivery</span><br/>
                            <input type="radio" name="pOption" value={"PAYPAL"} style={{marginRight:'1vh'}} onChange={paymentOptionInput}/>
                            <span >Pay with paypal </span>
                        </div>
                        
                    </div>
                    <div className="col-12 ">
                        <center>                  
                            <button type="button" className="btn btn-warning float-center mt-3" onClick={confirmOrder}>CONFIRM ORDER</button>
                        </center>
                    </div>
                    
                </>:
                <div><Loading/></div>
            }
            
            <div className="col-12"><Footer/></div>
            
        </div>
    );
}