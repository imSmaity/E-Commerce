import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import './product.css';

import { useLocation,useParams } from "react-router-dom";

import Footer from "../../footer/Footer";
import ProductData from "../../../Api/ProductData";
import Loading  from "../../loading/Loading";
import Button from "./ProductButton/Button";
import ProductDetails from "./productDetails/ProductDetails";
import axios from "axios";



function DeliveryPin(){
    const [pin,setPin]=useState("")

    function checkPin(){
        setPin("Delivery within 7 days")
    }

    return(
        <div id="pinInput">
            <div id="ddays">{pin}</div>
            <input type="text" placeholder="Enter your pincode"/>
            <button type='button' onClick={checkPin}>Check</button>
        </div>
    );
}


function newPath(id){
    let i=1
    let newPath=""
    const path=location.pathname
    if(id[0]==="w"){
        newPath="women_fashion"
    }
    else{
        while(path[i]!=='/'){
            newPath+=path[i]
            i++
        }
    }
    return { id:id, productType:newPath}
}

const Product=()=>{
    const [pendingOrder,setPendingOrder]=useState([])

    const apiData=ProductData()
    const {id}=useParams()
    
    useEffect(()=>{
        axios({
            method:'POST',
            url:`https://${process.env.REACT_APP_API_PATH}/admin/product_search`,
            data:newPath(id)
        })
        .then(res=>{
            setPendingOrder(res.data)
        })

    },[])



    return (
        <div className="row tTop-1">
        <div className="col-12">
            <Header/>
        </div>
        <div className="col-12">
            <Navbar/>
        </div>
        <div className="col-12">
            {!apiData.isLoaded?
                <Loading/>:
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <img className="timg-1 p-3 img-fluid" src={pendingOrder.imageLink} alt="..." />
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <h5 className="title-1">{pendingOrder.productName}</h5>
                        <h3 id="price-1">Price:	₹{pendingOrder.price}</h3>
                        <div className="title-1"><b>Color: </b>{pendingOrder.color}</div>
                        <DeliveryPin/>
                        <Button productData={pendingOrder}/>
                    </div>
                    <div className="col-12">
                        <ProductDetails pendingOrder={pendingOrder}/>
                    </div>
                </div>
            }
        </div>
        <div className="col-12">
            <Footer/>
        </div>
    </div>
    );
}

export default Product;
