
import { BrowserRouter as Router ,Switch,Route,useParams,useRouteMatch} from 'react-router-dom';
import LoginSignin from '../Components/login/LoginSignin';
import Signin from '../Components/login/loginSignupForm/Signin';
import { HomeItem } from './HomeItem.jsx';
import { BuyingItem } from './buyItem/BuyingItem.jsx';
import { ProductBuyPage1 } from '../Components/Layout/ItemLayout/ProductBuy/ProductBuyPage1.jsx';
import { PaymentOptions } from '../Components/Layout/ItemLayout/ProductBuy/PaymentOptions.jsx';
import { ProductBuyPage3 } from '../Components/Layout/ItemLayout/ProductBuy/ProductBuyPage3.jsx';
import {Home,Cart,
  MenWomenFashion,Admin, 
  Orders, CustomerService, 
  Mp1, Mp2, Mp3, Mp4, 
  KidsFashion, Covid19Product, 
  KitchenProduct,
  ElectronicDevices,
  ElectronicProducts
} from '../Pages/index.js';


function Routes() {
  let {path}=useRouteMatch();
  return (
    <Router>
      <div className="Routes">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/user-login">
            <LoginSignin/>
          </Route>
          <Route path="/user-signin">
            <Signin/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/customer-service">
            <CustomerService/>
          </Route>
          <Route exact path="/mw_fashion">
            <MenWomenFashion/>
          </Route>
          <Route exact path="/K_fashion">
            <KidsFashion/>
          </Route>
          <Route exact path="/covid19_product">
            <Covid19Product/>
          </Route>
          <Route exact path="/e_devices">
            <ElectronicDevices/>
          </Route>
          <Route exact path="/e_product">
            <ElectronicProducts/>
          </Route>
          <Route exact path="/k_product">
            <KitchenProduct/>
          </Route>
          <Route exact path="/mw_fashion/:id">
            <Mp1/>
          </Route>
          <Route exact path="/mw_fashion/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/mw_fashion/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route  path="/mw_fashion/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          {/* <Route path="/mw_fashion/S1">
            <Mp2/>
          </Route>
          <Route path="/mw_fashion/P1">
            <Mp3/>
          </Route>
          <Route path="/mw_fashion/H1">
            <Mp4/>
          </Route> */}
          
          <Route path="/admin2">
            <Admin/>
          </Route>
          <HomeItem/>
          
          
        </Switch>
      </div>
    </Router>
  );
}
function Topic(){
  let {id}=useParams();
  return <div><Mp1/></div>;
}
export default Routes;
