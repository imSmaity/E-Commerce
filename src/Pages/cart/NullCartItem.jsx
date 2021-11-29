import { Link } from "react-router-dom";

export const NullCartItem=()=>{
    return(
        <center>
            <div>
                <h5>Your cart is empty!</h5>
                <Link to="/"><button type='button' className="btn btn-primary">Shop Now</button></Link>
            </div>
        </center>
    );
}