import React, {useState} from 'react';
import Navbar from "./Navbar.jsx";
import ProductCard from "./ProductCard.jsx";
import product from "../product.js";
import productList from "../product.js";

const Shop = () => {
    const [products,setProduct]=useState(productList);
    const [cart,setCart]=useState([]);
    const addToCart=(id)=>{
        const currentProducts=products.find((product)=>product.id===id);
        const newItemForCart={
            id:Date.now(),
            product:currentProducts,
            quantity:1,
        }
        setCart([...cart,newItemForCart]);
    };
    const increasement=(cartId)=>{
        setCart(
            cart.map((itemInCart)=>{
                if(itemInCart.id===cartId){
                    itemInCart.quantity+=1;
                }
                return itemInCart;
            })
       );
    };
    const decreasement=(cartId)=>{
        setCart(
            cart.map((itemInCart)=>{
                if(itemInCart.id===cartId && itemInCart.quantity>1){
                    itemInCart.quantity-=1;

                }
                return itemInCart;
            })
        )
    };
    const removeCart=(cartId)=>{
        setCart(cart.filter((itemInCart) => itemInCart.id===cartId));
    }

    const star=(count)=>{
        let result="";
        for(let i=0;i<count;i++){
            result+="⭐";
        }
        return result;
    }
    return (
        <div className="container">
           <Navbar increasement={increasement} removeCart={removeCart} decreasement={decreasement} cart={cart} products={products}/>
            <div className="row g-3">
                {products.map((product)=>(
                    <div key={product.id} className="col-12 col-md-4 col-sm-6">
                    <ProductCard product={product} star={star} addToCart={addToCart} cart={cart}/>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Shop;