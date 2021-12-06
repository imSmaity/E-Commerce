
import { getUserData } from "../../../../localStorage/localStorage";
import Footer from "../../../footer/Footer";
import Header from "../../../header/Header";
import Navbar from "../../../navbar/Navbar";
import { Address } from "./Address";
import './productBuyPage3.css'

export const ProductBuyPage3=()=>{
    const pending_orders=getUserData().pending_orders

    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12 mtlp" ><h1>Order Placed Successfully 🎉</h1></div>
            <div className="col-12 ">
                <Address/>
            </div>
            <div className="col-12 mt-3">
                <div className="container-fluid">
                {
                    pending_orders.map((val,index)=>{
                        return(
                            <div className="row ps1h" key={index}>
                        
                                <div className="col-4">
                                    <img className="img-fluid" src={val.imageLink} alt="..."/>
                                    <span><h5>{val.productName}</h5></span>
                                </div>
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <p>Total ₹{val.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
                    
                        
                </div>
            </div>
            <div className="col-12"><Footer/></div>
        </div>
    );
}