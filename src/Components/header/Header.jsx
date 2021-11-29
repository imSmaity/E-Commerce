import './header.css';
import search from '../../Assets/Images/header-img/search.png';
import cart from '../../Assets/Images/header-img/cart.svg';
import { Link } from 'react-router-dom';
import { count_cart } from '../../Pages/cart/Cart';




const cartEle=(
    <div className="cartPosi">
        <Link to="/cart">
            <button className="btn btn-delault btn-sm" id="cart">
            <span className="start-50 translate-middle badge rounded-pill bg-danger">{count_cart}</span>
                <img src={cart} alt="..."></img>
                <span style={{color:'white'}}>Cart</span>
            </button>
        </Link>
    </div>
);





const Header=()=>{
    const token=localStorage.getItem("token")
    var button;

    function userLoggedStatus(){
        if(token === null){
            button=<Link  to="/user-login"><button id="loginBtn" className="btn btn-primary btn-sm">Login</button></Link>
        }
        else{
            const token=JSON.parse(localStorage.getItem("token"))
            button=(
                <>
                    <span id="uname-dply">{token.fname}</span> <button id="loginBtn2"  onClick={loggedOut}>Log out</button>
                </>
            );
        }
    }
    function loggedOut(){
        localStorage.removeItem("token")
        window.location.reload()
    }
    userLoggedStatus()
    return (
        <>  
            <div className="row topFixed fixed-top p-2">
                <div className="col-lg-3 col-md-3 col-sm-3 col-5">           {/*flexbox-> 3+5+4*/}
                    <h3 id="h3"><Link id="title-link" to="/">Shop.IN</Link></h3>
                </div>
                <div className="searchBox1 col-lg-4 col-md-4 col-sm-4">
                    <form >
                        <div className="input-group">
                            <input type="text" className="form-control"  align="center" placeholder="Search..." aria-label="Search" aria-describedby="button-addon1"/>
                            <button className="btn btn-primary btn-sm" type="button" id="button-addon1">
                                <img src={search} alt="..." />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    {button}
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-5">
                    {cartEle}
                </div>
            </div>
        </>
    );
}

export default Header;