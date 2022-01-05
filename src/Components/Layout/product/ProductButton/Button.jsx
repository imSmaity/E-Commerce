import { Link,useRouteMatch } from "react-router-dom";
import axios from 'axios'
import { getUserData } from "../../../../localStorage/localStorage";
import { loggedIn } from "../../../login/loginSignupForm/Login";



const addToCart=(itemData)=>{
    if(loggedIn()){
        const userData=getUserData()
        let productPush=true
        for(let i=0;i<userData.cart_items.length;i++){
            if(userData.cart_items[i].productId===itemData.productId){
                userData.cart_items[i].netQuantity+=1
                productPush=false
                i=userData.cart_items.length
            }
            
        }

        if(productPush)
        {
            userData.cart_items.push(itemData)
        }

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
    
}
function buyNow(itemData){
    if(loggedIn()){
        const userData=getUserData()
        userData.pending_orders=[]
        userData.pending_orders.push(itemData) 
        localStorage["token"]=JSON.stringify(userData)
    }

}

export default function Button(props){
    const {url}=useRouteMatch()
    
     return (
         <div id="productBtn">
  
            {
                loggedIn()?
                <>
                    <Link to="/cart">
                        <button type='button' id="cartBtn" className='btnT-1d' onClick={()=>{addToCart(props.productData)}}>
                        ADD TO CART</button>
                    </Link>
                    <Link to={`${url}/checkout`}>
                        <button type='button'  id="buyBtn" className='btnT-1d' onClick={()=>buyNow(props.productData)}>BUY NOW</button>
                    </Link>
                </>:
                <Link to="/user-login">
                    <button type='button' id="cartBtn" className='btnT-1d' >ADD TO CART</button>
                    <button type='button'  id="buyBtn" className='btnT-1d' >BUY NOW</button>
                </Link>
            }

         </div>
     );
 }