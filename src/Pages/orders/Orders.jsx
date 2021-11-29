import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import { useHistory } from 'react-router';

const Orders=()=>{
    
    
    //............................................. Check the user are login or not--!
    const history=useHistory();
    const token=localStorage.getItem("token")
    let loggedIn=true;
    if(token === null){
        loggedIn=false
    }
    if(!loggedIn){

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
        </div>
    );
}

export default Orders;
