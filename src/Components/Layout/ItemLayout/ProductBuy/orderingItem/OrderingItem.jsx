

export const OrderingItem=({pendingOrder})=>{
    
    return(
        <div className="card cms mt-3" style={{maxWidth:'800px'}} >
            <div className="row">
            {
                pendingOrder.map((orderedItem,index)=>{

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
    );
}