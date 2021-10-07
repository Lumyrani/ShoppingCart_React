import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Cart } from './components/Cart';
import data from './components/data';
import { useState } from 'react';


function App() {
  //  data["products"]
  const {products}= data
  const [productList,setProductList]=useState(data["products"])
  const[cartItems,setCartItem]=useState([])
const no_of_items= cartItems.length

  const onAdd= (product)=>{
    let exist= cartItems.find((item)=>
      item.id==product.id
    )
    console.log(exist)
    if(exist){

let updatedcart = cartItems.map((x)=>{
  return x.id == product.id ? {...exist, qty:exist.qty+1 } : {...x}

})




// const onRemove=cartItems.map((x)=>{
 
// return x.qty ==product.qty ? 0: product.qty --
// })
setCartItem(updatedcart)
    }
    else{
      setCartItem([...cartItems,{...product,qty:1}])
    }

      // setCartItem(cartItems.map((x)=>{
      //   return x.id== product.id?{...exist,qty:qty+1}:{...x}
      // }))
    }
    const onRemove =(product)=>{
      console.log("cartitem",product)
      // console.log(product)
      if(product.qty==1){
        console.log("inside if")
        let new_cartItems= cartItems.filter((item)=>{
          if(product.qty==1){
          return item.id != product.id
          }
          })
        setCartItem(new_cartItems)
        // console,log(cartItems)
        // setCartItem(cartItems.splice(cartItems.indexOf(product),1))
      }else{
        setCartItem(
        cartItems.map((item)=>{
          return item.id == product.id
          ?{...product,qty:product.qty-1}
          :{...item}
        })
        
        )
      }
    }
  


  return (
    <div>
      {/* <Header length ={no_of_items} /> */}
      <Header length ={no_of_items * cartItems} />
       <br />
      <div className="row block">
        <div className="col-sm-9">

          <Main onAdd={onAdd} products={productList} />
        </div>
        <div className="col-sm-3">
          <Cart  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </div>
       
    

      </div>
    </div>
  );
}

export default App;
