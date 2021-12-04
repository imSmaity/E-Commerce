import { PriceDetails } from "../../../PriceDetails/PriceDetails"
import Header from '../../../header/Header'
import Navbar from "../../../navbar/Navbar"
import Footer from '../../../footer/Footer'
import { Address } from "./Address"
import { OrderingItem } from "./orderingItem/OrderingItem"
import { Link, useRouteMatch } from "react-router-dom"
import './productBuyPage2/productBuyPage2.css'
import axios from 'axios'

export const PaymentOptions=()=>{
    const {url}=useRouteMatch()

    function confirmOrder(){
        const itemData=JSON.parse(localStorage.getItem("token"))
        axios({
            url:'http://localhost:8080/order',
            method:'post',
            data:itemData.pendingOrder
        })
        .then((res)=>{
            console.log(res.data)
        })
    }

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12 mt-5"><Address/></div>
            <div className="col-9">
                <OrderingItem/>
                <div className="payop mt-3">
                    <div><strong>PAYMENT OPTIONS</strong></div>
                    <label htmlFor="cod">Cash on Delivery</label>
                    <input type="radio" name="cod" id="cod" required/>
                    <Link to={`${url}/order_confirm`}>
                        <button type="button" className="btn btn-warning" onClick={()=>confirmOrder}>CONFIRM ORDER</button>
                    </Link>
                </div>
            </div>
            <div className="col-3">
                <PriceDetails/>
            </div>
            <div className="col-12"><Footer/></div>
            
        </div>
    );
}