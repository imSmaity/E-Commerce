import { useHistory } from 'react-router';
import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import './cart.css';
import { NullCartItem } from './NullCartItem';
import { getUserData } from '../../localStorage/localStorage';
import { useEffect, useState } from 'react';
import CartList from './cartList/CartList';


const Cart=()=>{

    const [cartCount,setCartCount]=useState(0)
    const history=useHistory();
    const userData=getUserData()

    useEffect(()=>{
        if(userData !== null){
            setCartCount(userData.cart_items.length)
        }
    },[])
    //............................................. Check the user are login or not--!
    
    

    let loggedIn=true;
    if(userData === null){
        loggedIn=false
    }

    if(!loggedIn){

        history.push('/user-login')
    }

    //..............................................!
    
    return(
        
        <div className="row tTop-1">
             <div className="col-12">
                <Header/>
            </div>
            <div className="col-12">
                <Navbar/>
            </div>
            
            {
                
                cartCount!==0?
                <div className="col-12">
                    <CartList userData={userData}/>
                    <Footer/>
                </div>:
                <>
                    <div className="col-12" style={{marginTop:'15vh'}}>
                        <NullCartItem/>
                    </div>
                    <div className='col-12 mt-5'>
                        <Footer/>
                    </div>
                </>
                
            }
            
        </div>
    );

}

export default Cart;
// export {cartItem};