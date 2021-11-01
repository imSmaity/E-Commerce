import Product from "../../../../Components/Layout/ItemLayout/Product"

const coat1Data={
    productName :'Louis Philippe Jeans Pure Cotton Solid Coat' ,
    imageLink:'https://i.ibb.co/0Gqs5Jn/gents-coat-pant-500x500.jpg' ,
    price:'1500' ,
    color: 'Black',
    dimensions: '30 x 10 x 3 cm',
    weight:'300gm',
    netQuantity:'1',
    genericName: 'Coat',
}

export const Coat1=()=>{
    return <Product data={coat1Data} />;
}