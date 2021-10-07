import React from 'react'
import './Cart.css'

export const Cart = ({cartItems,onAdd,onRemove}) => {
    const itemPrice=cartItems.reduce((x,item)=>item.qty*item.price+x,0)
    const taxcharges= itemPrice*0.15
    const shippingCharge= itemPrice>2000?50:0
    const totalprice= itemPrice+taxcharges+shippingCharge
    return (
        <div>
            {/* <h1 >CART{cartItems.length}</h1> */}
            <h1 >CART</h1>
            {cartItems.length==0?"cart is empty":""}
            {
                cartItems.map((item)=>{
            
                    return(<div>{item.name}
                    <p>{item.qty}</p>
                    <button onClick={()=>{onAdd(item)}} className="mybtn">+</button>
                    <button  onClick={()=>{onRemove(item)}}className="mybtn">-</button>
                    <p>${item.price*item.qty}</p>
                 
                    
                    </div>
                    )
                })
            }
            {cartItems.length>0?(
              <div> <h6>Tax Charges</h6><div>{taxcharges.toFixed(3)}</div>
               <h6>Shipping Charge</h6>
               <div>{shippingCharge.toFixed(3)}</div>
               <h5>Total Price</h5><div>{totalprice.toFixed(3)}</div>
               </div>):(<></>)
}
        </div>
    )
}
