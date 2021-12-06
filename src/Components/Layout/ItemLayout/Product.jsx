import React from "react";
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import './product.css';

import { useLocation } from "react-router-dom";

import Footer from "../../footer/Footer";
import ProductData from "../../../Api/ProductData";
import { Loading } from "../..";
import Button from "../product/ProductButton/Button";
import ProductDetails from "../product/productDetails/ProductDetails";



const colorPacks=(
    <div className="title-1"><b>Color:</b> white<br/>
        <input type="radio" className="colortext-1" name="color" ></input> white
        <input type="radio" className="colortext-1" name="color"></input> black
    </div>
);
const deliveryPin=(
    <div id="pinInput">
        <div id="ddays">Delivery by 7-8 days</div>
        <input type="text" placeholder="Enter your pincode"/>
        <button type='button'>Check</button>
    </div>
);





const Product=()=>{
    const location=useLocation()
    const pendingOrder=location.state
    const apiData=ProductData()

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
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <img className="timg-1 p-3 img-fluid" src={pendingOrder.imageLink} alt="..." />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <h5 className="title-1">{pendingOrder.productName}</h5>
                        <h3 id="price-1">Price:	₹{pendingOrder.price}</h3>
                        {colorPacks}
                        {deliveryPin}
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
