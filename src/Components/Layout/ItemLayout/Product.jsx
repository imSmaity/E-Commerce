import React, { createContext } from "react";
import Header from "../../header/Header";
import Navbar from "../../navbar/Navbar";
import './product.css';
import axios from 'axios'
// import { cartItem } from "../Cart";
import { Link } from "react-router-dom";

import Footer from "../../footer/Footer";

const BuyNow=createContext();

const addToCart=(itemData)=>{
    const token=JSON.parse(localStorage.getItem("token"))
    axios({
        method:'POST',
        url:'http://localhost:8080/admin/userData_update',
        data:{
            itemData:itemData,
            userId:token.email
        }
        
    })
    .then(res=>{
        localStorage.setItem("token",JSON.stringify(res.data))
        console.log(res.data)
        // console.log(JSON.parse(localStorage.getItem("token")))
    })
    .catch(
        console.log("DB Error!!!")
    )
}

function buyNow(itemData){
    
}

const Button=(props)=>{
   
    return (
        <div id="btn">
            <button type='button' id="btn1" className='btnT-1' onClick={()=>addToCart(props.productData)} >ADD TO CART</button>
            <Link to={window.location.pathname+"/checkout"}>
                <button type='button' id="btn2" className='btnT-1' onClick={()=>buyNow(props.productData)}>BUY NOW</button>
            </Link>
        </div>
    );
}

const deliveryPin=(
    <div id="pinInput">
        <div id="ddays">Delivery by 7-8 days</div>
        <input type="text" placeholder="Enter your pincode"/>
        <button type='button'>Check</button>
    </div>
);

const colorPacks=(
    <div className="title-1"><b>Color:</b> white<br/>
        <input type="radio" className="colortext-1" name="color" ></input> white
        <input type="radio" className="colortext-1" name="color"></input> black
    </div>
);

function productDetails(data){
    return(
    <table className="table table-borderless" id="tabHead">
        <thead>
            <tr>
                <th colSpan="2"><h3>Product Details</h3></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-secondary">Product Dimensions</td>
                <td>{data.dimensions}</td>
            </tr>
            <tr>
                <td className="text-secondary">Item Weight</td>
                <td>{data.weight}</td>
            </tr>
            <tr>
                <td className="text-secondary">Net Quantity</td>
                <td>{data.netQuantity}</td>
            </tr>
            <tr>
                <td className="text-secondary">Generic Name</td>
                <td>{data.genericName}</td>
            </tr>
        </tbody>
    </table>
    );
}



const Product=(props)=>{
    // console.log(props.data)
    // const cartItem=(
    //     <div className="card" style={{maxWidth:'540px'}}>
    //         <div className="row">
    //             <div className="col-md-4">
    //                 <img id="cartImg" src={props.imgSrc} alt='...'/>
    //             </div>
    //             <div className="col-md-8">
    //                 <h5 className="card-title">{props.title}</h5>
    //                 <p className="card-text">Price:	₹{props.price}</p>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="row tTop-1">
        <div className="col-12">
            <Header/>
        </div>
        <div className="col-12">
            <Navbar/>
        </div>
        <div className="col-12">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <img className="timg-1 p-3 img-fluid" src={props.data.imageLink} alt="..." />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <h5 className="title-1">{props.data.productName}</h5>
                    <h3 id="price-1">Price:	₹{props.data.price}</h3>
                    {colorPacks}
                    {deliveryPin}
                    <Button productData={props.data}/>
                </div>
                <div className="col-12">
                    {productDetails(props.data)}
                </div>
            </div>  
        </div>
        <div className="col-12">
            <Footer/>
        </div>
    </div>
    );
}

export default Product;
// export {cartItem};