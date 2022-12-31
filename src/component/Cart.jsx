import React from 'react';
import CartList from "./CartList.jsx";
const Cart = ({setOpenCart,cart,increasement,removeCart,decreasement}) => {
    const total=cart.reduce((pv,cv)=>pv+cv.product.price * cv.quantity,0)
    return (
        <div>
            <div className="w-100 min-vh-100 fixed-top bg-dark-05">
                <div className="row justify-content-end">
                    <div className="col-10 col-md-3 col-sm-6 bg-white m-3 rounded-3">

                        <div className="d-flex justify-content-between pt-3">
                            <h3>Cart Item <span className="badge bg-info">{cart.length}</span></h3>
                            <i onClick={(_)=>setOpenCart(false)} className="ms-auto bi bi-x-lg fs-4"></i>
                        </div>

                        <hr className="m-0"/>

                            <div className="cart-scroll mt-1">
                                {cart.map(itemInCart=>(
                                    <CartList removeCart={removeCart} itemInCart={itemInCart} increasement={increasement} decreasement={decreasement} key={itemInCart.id}/>
                                ))}
                            </div>


                        <hr className="m-0"/>
                        <div className="d-flex justify-content-between">
                            <h3>Total</h3>
                            <h4>{total}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;