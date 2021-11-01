import Product from "../../../Components/Layout/ItemLayout/Product"

const moblData={
    productName :'Realme Mobile Narzo 20 (4GB RAM,64GB Storage)' ,
    imageLink:'https://i.ibb.co/vsDJBHb/realme.jpg',
    price:'10,499' ,
    color: 'White',
    dimensions: '6.25 x 3 inch',
    weight:'0.73 W/kg',
    netQuantity:'1',
    genericName: 'Mobile',
}

export const RealmeMob1=()=>{
    return <Product data={moblData}/>;
}