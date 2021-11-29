
import { BrowserRouter as Router ,Switch,Route,useParams,useRouteMatch} from 'react-router-dom';
import {Home,Cart,MenWomenFashion,Admin, Orders, CustomerService, Mp1, Mp2, Mp3, Mp4} from '../Pages/index.js';
import LoginSignin from '../Components/login/LoginSignin';
import Signin from '../Components/login/loginSignupForm/Signin';
import { HomeItem } from './HomeItem.jsx';
import { BuyingItem } from './buyItem/BuyingItem.jsx';


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
          
          <Route exact path="/mw_fashion/T1">
            <Mp1/>
          </Route>
          <Route path="/mw_fashion/S1">
            <Mp2/>
          </Route>
          <Route path="/mw_fashion/P1">
            <Mp3/>
          </Route>
          <Route path="/mw_fashion/H1">
            <Mp4/>
          </Route>
          <BuyingItem/>
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
