import './navbar.css';
import search from '../../Assets/Images/navbar-img/search.png';
import menu from '../../Assets/Images/navbar-img/menu.png';
import { Link } from 'react-router-dom';

const navItemElement=(
    <div className="col-sm-12 listItem" id="navItem">
        <Link className="navLink" to="/">Home</Link>    
        <Link className="navLink" to="/orders">Orders</Link>
        <Link className="navLink" to="/customer-service">Customer Service</Link>
    </div>
);

const searchElement=(
    <div className="col-10 searchBox2">
        <form >
            <div className="input-group">
                <input type="text" className="form-control"  align="center" placeholder="Search..." aria-label="Search" aria-describedby="button-addon1"/>
                <button className="btn btn-primary btn-sm" type="button" id="button-addon1">
                    <img src={search} alt="..." />
                </button>
            </div>
        </form>
    </div>
);

const Navbar=()=>{
    
    /* let navStatus=true;

    
    function styleNavbar(){
        if(navStatus === true)
        {
            document.getElementById('navItem').style.display='inline';
            navStatus=false;
        }
        else
            {
            document.getElementById('navItem').style.display='none';
            navStatus=true;
        }
    }   */

    return(
        <>
            <div className="row navFixed fixed-top p-2">
                <div className="col-2 navBtn ">
                    <button className="navbarBtn" type="button" ><img src={menu} alt="..."/></button>
                </div>
                {searchElement}
                {navItemElement}
            
            </div>
        </>
    );
}

export default Navbar;