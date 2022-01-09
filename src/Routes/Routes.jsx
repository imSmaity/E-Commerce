
import { BrowserRouter as Router ,Switch,Route,useParams,useRouteMatch} from 'react-router-dom';
import LoginSignin from '../Components/login/LoginSignin';
import Signin from '../Components/login/loginSignupForm/Signin';

import {Home,Cart,
  MenWomenFashion,Admin, 
  Orders, CustomerService, 
  KidsFashion, Covid19Product, 
  KitchenProduct,
  ElectronicDevices,
  ElectronicProducts,
  ProductBuyPage1,
  PaymentOptions,
  ProductBuyPage3,
  NotFound,
  AboutUs,
  Help,
  Profile,
  ForgotPassword
} from '../Pages/index.js';
import Product from '../Components/Layout/product/Product';
import { Offline, Online } from 'react-detect-offline';
import { PayPal } from '../Components';

function Routes() {
const ADMIN_PATH=process.env.REACT_APP_ADMIN_PATH
  return (
    <Router>
      <div className="Routes">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="/user-login">
            <Online><LoginSignin/></Online>
           
            <div style={{color:'red'}}> 
              <Offline>You're offline right now. Check your connection.</Offline>
            </div>
          </Route>
          <Route path="/user-signin">
            <Online><Signin/></Online>
           
            <div style={{color:'red'}}> 
              <Offline>You're offline right now. Check your connection.</Offline>
            </div>
           
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/customer-service">
            <CustomerService/>
          </Route>

          
          <Route exact path="/men_fashion">
            <MenWomenFashion/>
          </Route>
          <Route exact path="/kids_fashion">
            <KidsFashion/>
          </Route>
          <Route exact path="/covid-19_product">
            <Covid19Product/>
          </Route>
          <Route exact path="/electronic_gadget">
            <ElectronicDevices/>
          </Route>
          <Route exact path="/electronics_product">
            <ElectronicProducts/>
          </Route>
          <Route exact path="/kitchen_product">
            <KitchenProduct/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route path="/about_us">
            <AboutUs/>
          </Route>
          <Route path="/help">
            <Help/>
          </Route>
          
          <Route path="/forgot_password">
            <Online><ForgotPassword/></Online>
           
            <div style={{color:'red'}}> 
              <Offline>You're offline right now. Check your connection.</Offline>
            </div>
          </Route>
          <Route path={ADMIN_PATH}>
            <Admin/>forgot_password
          </Route>
          
          
          
          
          {/* ------------------------------------------------------------- */}
          <Route exact path="/men_fashion/:id">
            <Product/>
          </Route>
          <Route exact path="/kids_fashion/:id">
            <Product/>
          </Route>
          <Route exact path="/covid-19_product/:id">
            <Product/>
          </Route>
          <Route exact path="/electronic_gadget/:id">
            <Product/>
          </Route>
          <Route exact path="/electronics_product/:id">
            <Product/>
          </Route>
          <Route exact path="/kitchen_product/:id">
            <Product/>
          </Route>
          <Route exact path="/cart/:id">
            <ProductBuyPage1/>
          </Route>

          {/* ------------------------------------------------------------- */}
          <Route path="/home_carousels/:id">
              <Product/>
          </Route>
          <Route path="/home_carousels/:id">
              <Product/>
              </Route>
          <Route exact path="/men_fashion/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/kids_fashion/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/covid-19_product/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/electronic_gadget/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/electronics_product/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/kitchen_product/:id/:id">
            <ProductBuyPage1/>
          </Route>
          <Route exact path="/cart/:id/:id">
            <PaymentOptions/>
          </Route>
          
          
          {/* ------------------------------------------------------------- */}
          <Route exact path="/men_fashion/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/kids_fashion/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/covid-19_product/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/electronic_gadget/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/electronics_product/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/kitchen_product/:id/:id/:id">
            <PaymentOptions/>
          </Route>
          <Route exact path="/cart/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>

          {/* ------------------------------------------------------------------------ */}
          <Route  path="/men_fashion/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/kids_fashion/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/covid-19_product/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/electronic_gadget/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/electronics_product/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/kitchen_product/:id/:id/:id/confirm_order">
            <ProductBuyPage3/>
          </Route>
          {/* ------------------------------------------------------------- */}

          {/* ----------------------------------------------------------------------------- */}
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
