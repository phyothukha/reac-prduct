import React, {useState} from 'react';
import Cart from "./Cart.jsx";

const Navbar = ({cart,increasement,removeCart,decreasement}) => {
    const [openCart,setOpenCart]=useState(false);
    return (
        <>
            <nav className="border border-info my-3">
            <div className="d-flex justify-content-between p-3">
                <h4 className="fw-bold text-info">Shop</h4>
                <div className="">
                    <button className="btn btn-outline-info me-2">
                        <i className="bi bi-search"></i>
                    </button>
                    <button type="button" onClick={
                        (_)=>
                        setOpenCart(true)
                    }  className="btn btn-outline-info position-relative">
                        <i className="bi bi-cart"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            {cart.length}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
            {openCart && (
                <Cart cart={cart} removeCart={removeCart} setOpenCart={setOpenCart} increasement={increasement} decreasement={decreasement}/>
            )}
        </>
    );
};

export default Navbar;