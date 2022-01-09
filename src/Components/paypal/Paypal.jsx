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
    return ((count+40)/55.3).toFixed(2)
  }
  else{
    return (count/55.3).toFixed(2)
  }
   
}

export default function PayPal({setPayment}) {
    
    const paypal=useRef()
    const history=useHistory()
    const userData=getUserData()
    const {url}=useRouteMatch()

    if(!loggedIn()){
      history.push('/')
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

          loggedIn()?

            <center>
              <div ref={paypal} style={{marginLeft:'.5vh'}} className='mt-1'></div>
            </center>
        
          :
          <div></div>

        }
        
        
      </>
    )
}
