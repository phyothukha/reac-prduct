import React from 'react';

const CartList = ({itemInCart,increasement,decreasement,removeCart}) => {
    const cost=itemInCart.product.price * itemInCart.quantity;
    const del=(id)=>{
        if (confirm("Are U sure to remove item ?")) {
            removeCart(id);
        }
    }
    return (
        <div>
            <div className="border border-info p-2 mt-2 rounded-3">
                <p>{itemInCart.product.title}</p>
                <div className="d-flex justify-content-between">
                    <div className="input-group cartCount">
                        <button onClick={(_) => decreasement(itemInCart.id)} className="btn btn-outline-info btn-sm"><i className="bi bi-dash"></i></button>
                        <input type="number" value={itemInCart.quantity} className="form-control p-0 text-end"/>
                        <button onClick={(_) => increasement(itemInCart.id)} className="btn btn-outline-info btn-sm"><i className="bi bi-plus"></i></button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="align-bottom">${cost}</span>
                        <button onClick={del.bind(null,itemInCart.id)} className="btn btn-sm btn-danger ms-2"><i className="bi bi-trash"></i></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartList;