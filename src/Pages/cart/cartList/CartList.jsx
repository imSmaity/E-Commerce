import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { PriceDetails } from "../../../Components";
import deleteImg from "../../../Assets/Images/cart-img/delete.png";
import axios from "axios";
import { getUserData } from "../../../localStorage/localStorage";



function placeOrder(userData){
    userData.pending_orders=[]
    userData.cart_items.map((val)=>{
        userData.pending_orders.push(val)
    })
    userData.cart_items=[]
    localStorage["token"]=JSON.stringify(userData)

    axios({
        method:'POST',
        url:'http://localhost:8080/admin/userData_update',
        data:{
            userData:getUserData(),
        }
        
    })
    .then(console.log("Success"))
    .catch(
        console.log("DB Error!!!")
    )
}



export default function CartList({userData}){
    const {url}=useRouteMatch()

    return(
        <>
        <div className="row">
            <div className="col-md-8 col-sm-12 col-12" >
                    <div className="container-fluid">
                    {
                        userData.cart_items.map((cartItem,index)=>{

    
                            return(
        
                                    <div className="card cms" style={{maxWidth:'800px'}} key={index}>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-3 col-3">
                                                <Link to={{pathname:`/mw_fashion/${cartItem.productId}`,state:cartItem}}><img id="cartImg" src={cartItem.imageLink} alt='...'/></Link>
                                            </div>
                                            <div className="col-md-8 col-sm-9 col-9" id="card-cart">
                                            <Link to={{pathname:`/mw_fashion/${cartItem.productId}`,state:cartItem}}><p className="card-title cfs-3">{cartItem.productName}</p></Link>
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
                            
                    }
                    <Link to={`${url}/checkout`} >
                        <button type="button"className="btn btn-warning float-end mt-2" onClick={()=>placeOrder(userData)}>PLACE ORDER</button>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <PriceDetails pendingOrder={userData.cart_items}/>
            </div>
            </div>
        </>
    );
}