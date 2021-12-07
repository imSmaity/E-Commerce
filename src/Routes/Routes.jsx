
import { BrowserRouter as Router ,Switch,Route,useParams,useRouteMatch} from 'react-router-dom';
import LoginSignin from '../Components/login/LoginSignin';
import Signin from '../Components/login/loginSignupForm/Signin';
import { HomeItem } from './HomeItem.jsx';


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
  NotFound
} from '../Pages/index.js';
import Product from '../Components/Layout/product/Product';
import { admin_url } from '../Pages/admin/Admin';


function Routes() {

  return (
    <Router>
      <div className="Routes">
        <Switch>
          <Route exact path="/">
            <Home/>
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
          <Route path={admin_url}>
            <Admin/>
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
          
          {/* ------------------------------------------------------------- */}
          
          
          
          <Route  path="/men_fashion/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/kids_fashion/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/covid-19_product/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/electronic_gadget/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/electronics_product/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          <Route  path="/kitchen_product/:id/:id/:id/:id">
            <ProductBuyPage3/>
          </Route>
          {/* ------------------------------------------------------------- */}
          
          
          {/* <Route path="/men_fashion/S1">
            <Mp2/>
          </Route>
          <Route path="/men_fashion/P1">
            <Mp3/>
          </Route>
          <Route path="/men_fashion/H1">
            <Mp4/>
          </Route> */}
          <Route>
            <NotFound/>
          </Route>
          <HomeItem/>

        </Switch>
      </div>
    </Router>
  );
}
function Topic(){
  let {id}=useParams();
  return <div><Product/></div>;
}
export default Routes;
