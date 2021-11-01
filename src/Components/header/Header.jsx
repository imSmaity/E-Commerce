import './header.css';
import search from '../../Assets/Images/header-img/search.png';
import cart from '../../Assets/Images/header-img/cart.svg';
import { Link } from 'react-router-dom';




const cartEle=(
    <div className="cartPosi">
        <Link to="/cart">
            <button className="btn btn-delault btn-sm" id="cart">
            <span className="start-50 translate-middle badge rounded-pill bg-danger">1</span>
                <img src={cart} alt="..."></img>
                <span style={{color:'white'}}>Cart</span>
            </button>
        </Link>
    </div>
);





const Header=()=>{
    return (
        <>  
            <div className="row topFixed fixed-top p-2">
                <div className="col-lg-3 col-md-3 col-sm-3 col-5">           {/*flexbox-> 3+5+4*/}
                    <h3 id="h3"><Link id="title-link" to="/">Shop.IN</Link></h3>
                </div>
                <div className="searchBox1 col-lg-5 col-md-5 col-sm-5">
                    <form >
                        <div className="input-group">
                            <input type="text" className="form-control"  align="center" placeholder="Search..." aria-label="Search" aria-describedby="button-addon1"/>
                            <button className="btn btn-primary btn-sm" type="button" id="button-addon1">
                                <img src={search} alt="..." />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <Link  to="/user-login"><button id="loginBtn" className="btn btn-primary btn-sm">Login</button></Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-5">
                    {cartEle}
                </div>
            </div>
        </>
    );
}

export default Header;