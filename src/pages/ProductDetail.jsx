import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from '../store/slices/products.slice';
import { Button, Form, InputGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { addToCartThunk } from '../store/slices/cart.slice';

const ProductDetail = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        dispatch(getProducts());
      }, []);

      useEffect(() => {
        const products = allProducts.find((newsItem) => newsItem.id === Number(id));
        setProductDetail(products);
      }, [allProducts]);

      console.log(productDetail)

      const addToCart = () => {
        alert("Añadido a favoritos");
        const addCart = {
          id: productDetail.id,
          quantity
        };
        dispatch(addToCartThunk(addCart))
        console.log(addCart);
      };

    return (
        <div>
    

            <h1>Product Detail</h1>
            <h2>Product: {productDetail?.title} </h2>
           <h3>Price: {productDetail?.price}</h3>
           <div>
           <Carousel>
           {productDetail?.productImgs?.map((imgs) =>(
            
           
      
      <Carousel.Item>
        <img 
         width={400} height={450}
          className="d-block w-100 imgSlider"
          src={imgs}
          alt="First slide"
        />
      </Carousel.Item>
      
    
   
           ))}
           </Carousel>
           </div>
           
           <p className='despcription'>{productDetail?.description}</p>
             

          <div className='addtocart'>
            
            <InputGroup className='mb-3'>
            <Form.Control
            placeholder='Quantity'
            aria-label='Quantity'
            aria-describedby='basic-addon2'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            />
            
          <div className='btnCart'>
            
            <Button variant='outline-secundary' id='button-addon2' onClick={()=> addToCart()}>
              Add to Cart
            </Button>
            </div>
            </InputGroup>
          </div>

           
        </div>
    );
};

export default ProductDetail;