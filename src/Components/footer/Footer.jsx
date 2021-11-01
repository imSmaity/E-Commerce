import { Link } from 'react-router-dom';
import './footer.css';

const Footer=()=>{
    return(
        <>
                <footer className="page-footer font-small blue pt-4">
                    <div className="p-3">
                        <div className="container-fluid text-center text-md-left">
                            <div className="row bg">
                                <div className="col-4">
                                    <h5 className="text-uppercase text-white">Get to Know Us</h5>
                                    <ul className="list-unstyled">
                                        <li><Link className="footLink" to="/about_us">About Us</Link></li>
                                        <li><Link className="footLink" to="/s_cares">Shopping Cares</Link></li>
                                        <li><Link className="footLink" to="/g_smile">Gift a Smile</Link></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h5 className="text-uppercase text-white">Connect with Us</h5>
                                    <ul className="list-unstyled">
                                        <li><Link className="footLink" to="/c_facebook">Facebook</Link></li>
                                        <li><Link className="footLink" to="/c_twitter">Twitter</Link></li>
                                        <li><Link className="footLink" to="/c_instagram">Instagram</Link></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                        <h5 className="text-uppercase text-white">Let Us Help You</h5>
                                        <ul className="list-unstyled">
                                            <li><Link className="footLink" to="/your_account">Your Account</Link></li>
                                            <li><Link className="footLink" to="/returns_centre">Returns Centre</Link></li>
                                            <li><Link className="footLink" to="/p_Protection">100% Purchase Protection</Link></li> 
                                            <li><Link className="footLink" to="/help">Help</Link></li>
                                        </ul>
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