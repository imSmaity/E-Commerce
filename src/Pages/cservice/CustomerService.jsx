import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import './customerService.css';

const CustomerService=()=>{
    return(
        <div className="row">
            <div className=" col-12">
                <Header/>
            </div>
            <div className=" col-12">
                <Navbar/>
            </div>
            <div className="col-12 cus1">
                <center>
                    <h3>Customer Service</h3>
                    <div>
                        <input type="text" placeholder="Type your question here"></input>
                    </div>
                    <button type="submit" className="btn btn-dark btn-md">Submit</button>
                </center>
            </div>
        </div>
    );
}

export default CustomerService;