import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import { useHistory } from 'react-router';
import Footer from '../../Components/footer/Footer';
import { getUserData } from '../../localStorage/localStorage';
import './orders.css'
import { loggedIn } from '../../Components';

const Orders=()=>{
    
    
    //............................................. Check the user are login or not--!
    const history=useHistory();
    if(!loggedIn()){

        history.push('/user-login')
    }
    
    //..............................................!
    return(
        <div className="row">
            <div className=" col-12">
                <Header/>
            </div>
            <div className=" col-12">
                <Navbar/>
            </div>
            <div className="col-12 omt">
                <div className="container">
                    {loggedIn()===true &&
                        getUserData().orders.reverse().map((orderedItem,index)=>{
                            return(
                                <div key={index}>
                                    <div className="col-md-4 col-sm-3 col-3">
                                        <img id="cartImg" src={orderedItem.imageLink} alt='...'/>
                                    </div>
                                    <div className="col-md-8 col-sm-9 col-9" id="card-cart">
                                        <p className="card-title cfs-3">{orderedItem.productName}</p>
                                        <p className="card-text">Price:	₹{orderedItem.price}</p>
                                                
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-12">
                <Footer/>
            </div>
        </div>
    );
}

export default Orders;
