import { PriceDetails } from "../../../Components/PriceDetails/PriceDetails"
import Header from '../../../Components/header/Header'
import Navbar from "../../../Components/navbar/Navbar"
import Footer from '../../../Components/footer/Footer'
import { Address } from "../../../Components/address/Address"
import { OrderingItem } from "../../../Components/orderingItem/OrderingItem"
import { Link, useRouteMatch,useLocation, useHistory } from "react-router-dom"
import './productBuyPage2.css'
import axios from 'axios'
import { getUserData } from "../../../localStorage/localStorage"
import { Loading, loggedIn } from "../../../Components"
import { useState } from "react"

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

        if(currPaymentOption!==""){
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
            .then()
        }
        else{
            alert('Please select a payment method for your order.')
        }
    }

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12"><Address/></div>
            {
                loggedIn()?
                <>
                    <div className="col-9">
                    <OrderingItem pendingOrder={userData.pending_orders}/>
                    <div className="payop mt-3">
                        <div><strong>PAYMENT OPTIONS</strong></div>
                        <label htmlFor="cod">Cash on Delivery</label>
                        <input type="radio" name="pOption" id="cod" value={"cod"} onChange={paymentOptionInput}/>
                        {
                            currPaymentOption!==""?
                            <Link to={`${url}/payment_options`}>
                                <button type="button" className="btn btn-warning" onClick={confirmOrder}>CONFIRM ORDER</button>
                            </Link>:
                            <button type="button" className="btn btn-warning" onClick={confirmOrder}>CONFIRM ORDER</button>
                        }
                        
                    </div>
                    </div>
                    <div className="col-3">
                        <PriceDetails pendingOrder={userData.pending_orders}/>
                    </div>
                </>:
                <div><Loading/></div>
            }
            
            <div className="col-12"><Footer/></div>
            
        </div>
    );
}