import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from '../store/slices/products.slice';
import { Button, Form, InputGroup } from "react-bootstrap";

const ProductDetail = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();
    const dispatch = useDispatch();

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
          
        };
        console.log(favorite);
      };

    return (
        <div>
    

            <h1>Products to sale</h1>
           <h3>{productDetail?.title}</h3> 
           <p> {productDetail?.price}</p>
           <p>{productDetail?.description}</p>
           

           
        </div>
    );
};

export default ProductDetail;