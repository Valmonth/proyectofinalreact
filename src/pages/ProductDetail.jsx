import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from '../store/slices/products.slice';

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
    return (
        <div>
            <h1>Product Detail</h1>
           <h3>{productDetail?.title}</h3> 
           <p> {productDetail?.price}</p>
           <p>{productDetail?.description}</p>
        </div>
    );
};

export default ProductDetail;