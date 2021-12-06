import { Link,useRouteMatch } from "react-router-dom";
import axios from 'axios'
import { getUserData, setUserData } from "../../../../localStorage/localStorage";



const addToCart=(itemData)=>{
    
    const userData=getUserData()
    userData.cart_items.push(itemData) 
    localStorage["token"]=JSON.stringify(userData)

    axios({
        method:'POST',
        url:'http://localhost:8080/admin/userData_update',
        data:{
            userData:getUserData(),
        }
        
    })
    .then(res=>{
        console.log("Cart response data",res.data)
    })
    .catch(
        console.log("DB Error!!!")
    )
}
function buyNow(itemData){
    const userData=getUserData()
    userData.pending_orders=[]
    userData.pending_orders.push(itemData) 
    localStorage["token"]=JSON.stringify(userData)
}

export default function Button(props){
    const {url}=useRouteMatch()
    
     return (
         <div id="btn">
             <Link to="/cart"><button type='button' id="btn1" className='btnT-1' onClick={()=>addToCart(props.productData)} >ADD TO CART</button></Link>
             <Link to={{pathname:`${url}/checkout`,state:props.productData}}>
                 <button type='button'  id="btn2" className='btnT-1' onClick={()=>buyNow(props.productData)}>BUY NOW</button>
             </Link>
         </div>
     );
 }