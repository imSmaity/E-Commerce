import { Offline } from 'react-detect-offline';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer=()=>{
    return(
        <>
                <footer className="page-footer font-small blue pt-4 mtf">
                    <div className="p-3">
                        <div className="container-fluid text-center text-md-left">
                            <div className="row bg">
                                <div className="col-6">
                                    <h5 className="text-uppercase text-white">Get to Know Us</h5>
                                    <ul className="list-unstyled">
                                        <li><Link className="footLink" to="/about_us">About Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                        <h5 className="text-uppercase text-white">Let Us Help You</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="footLink" to="/profile">Your Account</Link></li>
                                            <li><Link className="footLink" to="/help">Help</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div style={{color:'red'}}> 
                                        <Offline>You're offline right now. Check your connection.</Offline>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-12 footer-copyright text-center bg-black text-white"  style={{backgroundColor:'black'}}> © 1996-2021 </div>
                </footer>
        </>
    );
}

export default Footer;