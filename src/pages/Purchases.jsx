import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector((state) => state.purchases);
console.log(purchases)
    return (
        <div>
            <h1>Last Purchases</h1>
            <ul>
                {purchases.map((purcha)=>(
                <li>Purchase id: {purcha.id}
                {purcha.cart.products.map((item) =>(
                   <div>
                    <h5>Item: {item.title} </h5>
                    <p>Brand: {item.brand}</p>
                    <p>Price: {item.price}</p>
                    </div>    
                ))}
                
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Purchases;