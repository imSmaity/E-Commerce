import { useHistory } from 'react-router';
import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
// import dataBase from "../dataBase";
import deleteImg from "../../Assets/Images/cart-img/delete.png";
import './cart.css';
import { PriceDetails } from '../../Components/PriceDetails/PriceDetails';
import { Link } from 'react-router-dom';
import { NullCartItem } from './NullCartItem';




let count_cart=0;
const Cart=()=>{

    //............................................. Check the user are login or not--!
    const history=useHistory();
    const token=localStorage.getItem("token")
    const items=JSON.parse(token)
    let loggedIn=true;
    if(token === null){
        loggedIn=false
    }
    if(!loggedIn){

        history.push('/user-login')
    }
    
    //..............................................!
    
    return(
        
        <div className="row tTop-1">
             <div className="col-12">
                <Header/>
            </div>
            <div className="col-12">
                <Navbar/>
            </div>
            
            <div className="col-md-8 col-sm-12 col-12" >
                <div className="container-fluid">
            {
                items.cart_items.length !==0?(
                items.cart_items.map((cartItem,index)=>{
                    count_cart=items.cart_items.length
                    {/* console.log(cartItem) */}
                    return(
   
                            <div className="card cms" style={{maxWidth:'800px'}} key={index}>
                                <div className="row">
                                    <div className="col-md-4 col-sm-3 col-3">
                                        <Link to={"/mw_fashion/"+cartItem.productId}><img id="cartImg" src={cartItem.imageLink} alt='...'/></Link>
                                    </div>
                                    <div className="col-md-8 col-sm-9 col-9" id="card-cart">
                                    <Link to={"/mw_fashion/"+cartItem.productId}><p className="card-title cfs-3">{cartItem.productName}</p></Link>
                                        <p className="card-text">Price:	₹{cartItem.price}</p>
                                        <label>Qty:</label>
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <button type="button" className="btn-rm" title="Remove">
                                        <img src={deleteImg} alt="..." />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
                ):<NullCartItem/>
                    
            }
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <PriceDetails/>
            </div>
            <div className="col-12">
                <Footer/>
            </div>
        </div>
    );

}

export default Cart;
export {count_cart}
// export {cartItem};