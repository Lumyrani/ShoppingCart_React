import React from 'react'
import { Product } from './Product'
import './Main.css'

export const Main = ({products,onAdd}) => {
    return (
        <div className="row">
            <h1 > Product List</h1>
            <div className="row">
            {
                products.map((product)=>{
                 return( <div className="col-sm-4">  
                 <Product key ={product.id} product={product} onAdd={onAdd}/></div>)

                })
            }
            </div>
        </div>
    )
}
