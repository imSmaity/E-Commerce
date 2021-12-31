import './header.css';
import cart from '../../Assets/Images/header-img/cart.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserData } from '../../localStorage/localStorage';




const CartEle=({cartItemCount})=>{
    return(
    <div className="cartPosi">
        <Link to="/cart">
            <button className="btn btn-delault btn-sm" id="cart">
            <span className="start-50 translate-middle badge rounded-pill bg-danger">{cartItemCount}</span>
                <img src={cart} alt="..."></img>
                <span style={{color:'white'}}>Cart</span>
            </button>
        </Link>
    </div>
    )
}





const Header=()=>{
    const [cartCount,setCartCount]=useState(0)
    const userData=getUserData()
    useEffect(()=>{
        if(userData !== null){
            setCartCount(userData.cart_items.length)
        }
    },[])
    var button;

    function userLoggedStatus(){
        if(userData === null){
            button=<Link  to="/user-login"><button id="loginBtn" className="btn btn-primary btn-sm">Login</button></Link>
        }
        else{
            button=(
                <>
                    <span ><Link to={"/profile"} id="uname-dply">{userData.fname}</Link></span> 
                    <button id="loginBtn2"  onClick={loggedOut}>Logout</button>
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
                <div className="col-lg-8 col-md-7 col-sm-5 col-3">           {/*flexbox-> 3+5+4*/}
                    <h3 id="h3"><Link id="title-link" to="/">Shop.IN</Link></h3>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-5">
                    <center >
                        {button}
                    </center>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                    <CartEle cartItemCount={cartCount}/>
                </div>
            </div>
        </>
    );
}

export default Header;