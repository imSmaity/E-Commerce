import { PriceDetails } from "../../../PriceDetails/PriceDetails"
import Header from '../../../header/Header'
import Navbar from "../../../navbar/Navbar"
import Footer from '../../../footer/Footer'
import { Address } from "./Address"
import { OrderingItem } from "./orderingItem/OrderingItem"
import { Link, useRouteMatch,useLocation } from "react-router-dom"
import './productBuyPage2/productBuyPage2.css'
import axios from 'axios'
import { getUserData } from "../../../../localStorage/localStorage"

export const PaymentOptions=()=>{
    const {url}=useRouteMatch()
    const userData=getUserData()

    function confirmOrder(){
        
        userData.pending_orders.map((val)=>{
            userData.orders.push(val)
        })
        localStorage["token"]=JSON.stringify(userData)

        axios({
            method:'POST',
            url:'http://localhost:8080/admin/userData_update',
            data:{
                userData:getUserData(),
            }
        })
        .then(res=>{
            console.log("Confirm Order msg",res.data)
        })
        .catch(
            console.log("DB Error!!!")
        )
    }

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12"><Address/></div>
            <div className="col-9">
                <OrderingItem pendingOrder={userData.pending_orders}/>
                <div className="payop mt-3">
                    <div><strong>PAYMENT OPTIONS</strong></div>
                    <label htmlFor="cod">Cash on Delivery</label>
                    <input type="radio" name="cod" id="cod" required/>
                    <Link to={`${url}/payment_options`}>
                        <button type="button" className="btn btn-warning" onClick={confirmOrder}>CONFIRM ORDER</button>
                    </Link>
                </div>
            </div>
            <div className="col-3">
                <PriceDetails pendingOrder={userData.pending_orders}/>
            </div>
            <div className="col-12"><Footer/></div>
            
        </div>
    );
}