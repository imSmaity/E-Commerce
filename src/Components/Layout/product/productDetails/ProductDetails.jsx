



export default function ProductDetails({pendingOrder}){
    return(
    <table className="table table-borderless" id="tabHead">
        <thead>
            <tr>
                <th colSpan="2"><h3>Product Details</h3></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-secondary">Product Dimensions</td>
                <td>{pendingOrder.dimensions}</td>
            </tr>
            <tr>
                <td className="text-secondary">Item Weight</td>
                <td>{pendingOrder.weight}</td>
            </tr>
            <tr>
                <td className="text-secondary">Net Quantity</td>
                <td>{pendingOrder.netQuantity}</td>
            </tr>
            <tr>
                <td className="text-secondary">Generic Name</td>
                <td>{pendingOrder.genericName}</td>
            </tr>
        </tbody>
    </table>
    );
}
