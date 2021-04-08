import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [products, setProducts] = useState({});
    useEffect(()=>{
        fetch('https://infinite-sierra-42088.herokuapp.com/product/' + productKey)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[productKey])
    const product = products.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;