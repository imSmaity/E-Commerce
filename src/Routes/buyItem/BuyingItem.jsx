import { ProductBuyPage1 } from "../../Components/Layout/ItemLayout/ProductBuy/ProductBuyPage1";
import {PaymentOptions} from '../../Components/Layout/ItemLayout/ProductBuy/PaymentOptions'
import { Route } from "react-router";
import { ProductBuyPage3 } from "../../Components/Layout/ItemLayout/ProductBuy/ProductBuyPage3";


export const BuyingItem=()=>{
    return(
        <>
            <Route exact path={"/checkout"}>
                <ProductBuyPage1/>
            </Route>
            <Route exact path="/checkout/payment_options">
                <PaymentOptions/>
            </Route>
            <Route path="/checkout/payment_options/order_confirm">
                <ProductBuyPage3/>
            </Route>
        </>
    );
}