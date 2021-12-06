import './navbar.css';
import { Link } from 'react-router-dom';


const navItemElement=(
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>  
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/orders">Orders</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/customer-service">Customer Service</Link>
        </li>
    </ul>
);

const Navbar=()=>{
    

    return(
        <>
            <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark navFixed fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        {navItemElement}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;