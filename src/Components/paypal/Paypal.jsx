import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Footer, Header, loggedIn, Navbar } from '..';
import { getUserData } from '../../localStorage/localStorage';
import { ProductBuyPage3 } from '../../Pages';



function priceCalculate(){
  let count=0
  getUserData().pending_orders.map((val)=>{
      count+=(val.price*val.netQuantity)
  })
  if(count<500){
    return ((count+40)/55.5).toFixed(2)
  }
  else{
    return (count/55.5).toFixed(2)
  }
   
}

export default function PayPal() {
    const [paymentState, setPayment] = useState({status:""})
    const paypal=useRef()
    const history=useHistory()
    const userData=getUserData()
    const {url}=useRouteMatch()

    if(!loggedIn()){
      history.push('/')
    }
    if(paymentState.status==="COMPLETED"){
      userData.pending_orders.map((val)=>{
          userData.orders.push(val)
      })
      userData.cart_items=[]
      localStorage["token"]=JSON.stringify(userData)
      
      axios({
          method:'POST',
          url:`https://${process.env.REACT_APP_API_PATH}/admin/userData_update`,
          data:{
              userData:getUserData(),
          }
      })
      .then(()=>{
        setPayment({status:""})

      })
    }
    useEffect(()=>{
        if(loggedIn()){
          console.log(priceCalculate())
          window.paypal.Buttons({
          createOrder: (data, actions, err) => {
              return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "Cool looking table",
                      amount: {
                        currency_code: "CAD",
                        value: priceCalculate(),
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPayment(order)
              },
              onError:(err) => {
                console.log(err);
              },
          }).render(paypal.current)
        }
    },[])

    return(
      <>
        
        {
          paymentState.status!=="COMPLETED"?
          loggedIn()?
          <div className='row'>
            <div className='col-12'><Header/></div>
            <div className='col-12'><Navbar/></div>
            <div className='col-12' style={{marginTop:'40vh'}}>
              <center>
                <div ref={paypal} style={{marginLeft:'.5vh'}} className='mt-1'></div>
              </center>
            </div>
          <div className='col-12'><Footer/></div>
          </div>:
          <div></div>:
          <ProductBuyPage3/>
          
          
        }
        
        
      </>
    )
}
