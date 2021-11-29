import { ProductBuyPage1 } from "../../Components/Layout/ItemLayout/ProductBuy/ProductBuyPage1";
import { Route } from "react-router";

export const BuyingItem=()=>{
    return(
        <Route path={"/checkout"}>
            <ProductBuyPage1/>
        </Route>
    );
}