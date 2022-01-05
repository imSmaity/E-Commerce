import { PriceDetails } from "../../../Components/PriceDetails/PriceDetails"
import { Address } from "../../../Components/address/Address"
import Header from '../../../Components/header/Header'
import Navbar from "../../../Components/navbar/Navbar";
import Footer from '../../../Components/footer/Footer'
import { OrderingItem } from "../../../Components/orderingItem/OrderingItem";
import { Link,useRouteMatch,useLocation, useHistory } from "react-router-dom";
import { getUserData } from "../../../localStorage/localStorage";
import { loggedIn } from "../../../Components";

export const ProductBuyPage1=()=>{
    let pending_orders
    const {url}=useRouteMatch()
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

            {
                loggedIn()?
                <>
                    <div className="col-12">
                    <Address />
                    </div>
                    <div className="col-8">
                        <OrderingItem pendingOrder={pending_orders}/>
                        <div>
                            <Link to={`${url}/payment_options`}><button type="button" className="btn btn-primary float-end mt-2">Continue</button></Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <PriceDetails pendingOrder={pending_orders}/>
                    </div>
                </>:
                <div>Loading...</div>
            }
            
            <div className="col-12"><Footer/></div>
        </div>
    )
}