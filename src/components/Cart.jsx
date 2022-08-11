import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector(state => state.cart)
    useEffect(()=>{
      dispatch(getCartThunk());
    },[])
    
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          {carts.map((cart) => (
            <li key={cart.id} onClick={() => navigate(`/productDetail/${cart.id}`)}>
              {cart.title}
            
            </li>
          ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    );
};

export default Cart;