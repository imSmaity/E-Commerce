import { getUserData } from "../../../../../localStorage/localStorage";

export const OrderingItem=()=>{
    const itemData=getUserData()
    
    return(
        <div className="card cms mt-3" style={{maxWidth:'800px'}} >
            <div className="row">
                <div className="col-md-4 col-sm-3 col-3">
                    <img id="cartImg" src={itemData.pendingOrder.imageLink} alt='...'/>
                </div>
                <div className="col-md-8 col-sm-9 col-9" id="card-cart">
                    <p className="card-title cfs-3">{itemData.pendingOrder.productName}</p>
                    <p className="card-text">Price:	₹{itemData.pendingOrder.price}</p>
                            
                </div>
                        
            </div>
        </div>
    );
}