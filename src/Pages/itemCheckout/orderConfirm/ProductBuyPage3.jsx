
import { getUserData } from "../../../localStorage/localStorage";
import Footer from "../../../Components/footer/Footer";
import Header from "../../../Components/header/Header";
import Navbar from "../../../Components/navbar/Navbar";
import { Address } from "../../../Components/address/Address";
import './productBuyPage3.css'
import { useHistory } from "react-router-dom";
import { Loading, loggedIn } from "../../../Components";

export const ProductBuyPage3=()=>{
    let pending_orders
    const history=useHistory();
    if(!loggedIn()){

        history.push('/user-login')
    }
    else{
        pending_orders=getUserData().pending_orders
    }
    return(
        <div className="row">
            <div className="col-12"><Header/></div>
            <div className="col-12"><Navbar/></div>
            <div className="col-12 mtlp" ><h3>Order Placed Successfully</h3></div>
            {
                loggedIn()?
                <>
                    <div className="col-12 cba">
                        <h5>Delivery address</h5>
                        <div>Name: {getUserData().address.name}
                            <span id="aml">Phone: {getUserData().address.phNo}</span>
                            <span id="aml">PIN: {getUserData().address.pCode}</span>
                        </div>
                        <div>{getUserData().address.addressLine1}</div>
                    </div>
                    <div className="col-12 mt-3">
                
                        <div className="container-fluid">
                            {
                                pending_orders.map((val,index)=>{
                                    return(
                                        <div className="row ps1h" key={index}>
                                    
                                            <div className="col-6">
                                                <img className="img-fluid" src={val.imageLink} alt="..."/>
                                                <span><h5>{val.productName}</h5></span>
                                            </div>
                                            <div className="col-2"></div>
                                            <div className="col-4">
                                                <div>Total ₹{val.price}</div>
                                                <div>Qty: {val.netQuantity}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            }                                
                        </div>
                    </div>
                </>:
                <Loading/>
                    
            }
                
            
            <div className="col-12"><Footer/></div>
        </div>
    );
}