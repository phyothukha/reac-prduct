import React, {useState} from 'react';
import productList from "../product.js";
import product from "../product.js";


const ProductCard = ({product,cart,star,addToCart}) => {
    const isExitInCard=cart.find(itemInCart=>itemInCart.product.id===product.id);
    const rates=star(product.rating.rate);
    return (
            <div className="card border border-info">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <img src={product.image} height={50}  alt=""/>
                    <span>{rates}</span>
                    </div>
                    <p className="text-truncate mb-0">{product.title}</p>
                    <div className="d-flex justify-content-between align-items-center pt-2">
                        <p className="fw-bold mb-0 small">${product.price}</p>
                        {
                            isExitInCard?
                            (<button className="btn btn-sm btn-info">Added<i className="bi bi-cart-check"></i>
                            </button>):
                            (<button onClick={addToCart.bind(null,product.id)} className="btn btn-sm btn-outline-info">Add List <i className="bi bi-cart-plus"></i>
                            </button>)
                        }
                    </div>

                </div>
            </div>


    );
};

export default ProductCard;