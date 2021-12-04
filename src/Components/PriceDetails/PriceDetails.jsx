import './price_details.css'

export const PriceDetails=()=>{
    const itemData=JSON.parse(localStorage.getItem("token"))
    
    return(
        <>
            <div className="pfme aress">
                <table className="table">
                    <thead>
                        <tr><th>PRICE DETAILS</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td>₹{itemData.pendingOrder.price}</td>
                        </tr>
                        {
                            itemData.pendingOrder.price<500?
                            <tr>
                                <td>Delivery Charges</td>
                                <td>40</td>
                            </tr>:
                            <tr>
                                <td>Delivery Charges</td>
                                <td>FREE</td>
                            </tr>
                        }
                        <tr>
                            <td>Total Payable</td>
                            <td>₹{itemData.pendingOrder.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div>
                <button type="button" className="btn btn-warning btn-lg">PLACE ORDER</button>
            </div> */}
        </>
    );
}