import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
// import dataBase from "../dataBase";
// import deleteImg from "./image/delete.png";
import './cart.css';

// const cartItem=[
//     {
//         img:dataBase.men[0].img,
//         title:dataBase.men[0].title,
//         price:dataBase.men[0].price
//     }
// ];

const Cart=(props)=>{
    return(
        
        <div className="row tTop-1">
             <div className="col-12">
                <Header/>
            </div>
            <div className="col-12">
                <Navbar/>
            </div>
            
            <div className="col-12">
                <div className="container">
                    <div className="card" style={{maxWidth:'1100px'}}>
                        <div className="row">
                            <div className="col-md-4 col-sm-3 col-3">
                                <img id="cartImg" src={props.cartItem.imageLink} alt='...'/>
                            </div>
                            <div className="col-md-8 col-sm-9 col-9" id="card-cart">
                                <h5 className="card-title">{props.cartItem.productName}</h5>
                                <p className="card-text">Price:	₹{props.cartItem.price}</p>
                                <label>Qty:</label>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button type="button" className="btn-rm" title="Remove">
                                    <img src={deleteImg} alt="..." />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cart;

// export {cartItem};