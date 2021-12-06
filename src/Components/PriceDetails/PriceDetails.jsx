import './price_details.css'
import { useEffect, useState } from 'react'


function priceCalculate(pendingOrder){
    let count=0
    pendingOrder.map((val)=>{
        count+=val.price
    })
    return count
}


export const PriceDetails=({pendingOrder})=>{
    const [price,setPrice]=useState(0)
    useEffect(()=>{
        setPrice(priceCalculate(pendingOrder))
    },[])
    
    return(
        <>
            <div className="pfme aress">
                <table className="table">
                    <thead>
                        <tr><th>PRICE DETAILS</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price ({pendingOrder.length} items)</td>
                            <td>₹{price}</td>
                        </tr>
                        {
                            price<500?
                            <>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td>+40</td>
                                </tr>
                                <tr>
                                    <td>Total Payable</td>
                                    <td>₹{price+40}</td>
                                </tr>
                            </>:
                            <>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <td>Total Payable</td>
                                    <td>₹{price}</td>
                                </tr>
                            </>
                        }
                    </tbody>
                </table>
            </div>
            {/* <div>
                <button type="button" className="btn btn-warning btn-lg">PLACE ORDER</button>
            </div> */}
        </>
    );
}