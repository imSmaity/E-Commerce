
import axios from 'axios';
import { useState } from 'react';
import './tab1.css';

const Tab1=(props)=>{
    const [data,setData]=useState({pType:'',pId:'',pName:'',iLink:'',price:'',color:'',dimen:'',wei:'',qnty:'',gName:''});

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }


    function formSubmit(e){
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/admin',
            data: {
                productType: data.pType,
                productId : data.pId,
                productName : data.pName,
                imageLink: data.iLink,
                price: data.price,
                color: data.color,
                dimensions: data.dimen,
                weight: data.wei,
                netQuantity: data.qnty,
                genericName: data.gName
            }
        })
        .then(res => { 
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }


    return(
        <>
            <div className={props.className} style={props.styleing}>
                <h2 className="pb-3">Product Insert</h2>
                <div className="form__container">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="pType">Product type: </label>
                                    <select type="text" id="pType" name="pType" onChange={(e)=>handleChange(e)} >
                                        <option value="">Choose option</option>
                                        <option value="men_fashion">Men Fashion</option>
                                        <option value="women_fashion">Women Fashion</option>
                                        <option value="kids_fashion">Kids' Fashion</option>
                                        <option value="covid-19_product">Equipment for covid-19</option>
                                        <option value="electronics_product">Electronics Items</option>
                                        <option value="electronic_gadget">Electronic Gadgets</option>
                                        <option value="kitchen_product">Kitchen & Dining product</option>
                                    </select>
                                </td>
                                <td>
                                    <label htmlFor="pid">Product ID: </label>
                                    <input type="text" id="pid" name="pId" onChange={(e)=>handleChange(e)} />
                                </td>
                                <td>
                                    <label htmlFor="">Product Name: </label>
                                    <input type="text" id="pname" name="pName" onChange={(e)=>handleChange(e)}/>
                                </td>
                                <td>
                                    <label htmlFor="iLink">Image Link: </label>
                                    <input type="text" id="iLink" name="iLink"  onChange={(e)=>handleChange(e)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">Price: </label>
                                    <input type="text" id="price" name="price"  onChange={(e)=>handleChange(e)}/>
                                </td>
                                <td>
                                    <label htmlFor="">Color: </label>
                                    <select id="color" name="color" onChange={(e)=>handleChange(e)}>
                                        <option value="">Choose option</option>
                                        <option value="White">White</option>
                                        <option value="Black">Black</option>
                                    </select>
                                </td>
                                <td>
                                    <label htmlFor="">Dimensions: </label>
                                    <input type="text" id="dimen" name="dimen"  onChange={(e)=>handleChange(e)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">Weight: </label>
                                    <input type="text" id="wei" name="wei" onChange={(e)=>handleChange(e)}/>
                                </td>
                                <td>
                                    <label htmlFor="">Net Quantity: </label>
                                    <input type="text" id="qnty" name="qnty" onChange={(e)=>handleChange(e)} />
                                </td>
                                <td>
                                    <label htmlFor="">Generic Name: </label>
                                    <input type="text" id="gname" name="gName" onChange={(e)=>handleChange(e)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="fb1">
                        <button type="button" className="btn btn-primary" onClick={e=>formSubmit(e)} id="addBtn">Add</button>
                        <button  type="reset" className="btn btn-primary" style={{marginLeft:'3vh'}}>Clear</button>
                    </div>
                </div>      
                           
            </div>
        </>
    );
}

export default Tab1;