import React from 'react'
import{ useParams } from 'react-router-dom'
import Mobiles from './Mobiles';
import AccessoriesData from './AccessoriesData';
import Accessories from './Accessories';
import { useState } from 'react';
import Smartphones from './Product';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addItem, delItem} from './Redux/Actions/Index';
import MainCart from './MainCart';

const ProductDetail = () => {

    const [cartBtn, setCartBtn] = useState('Add to Cart')

    const proid = useParams();
    const proDetail = Mobiles.filter(x => x.id == proid.id)
    const product = proDetail[0];
//    console.log(product);

const dispatch = useDispatch();  

const handleCart = (product) => {
    if (cartBtn === 'Add to Cart') {
        dispatch(addItem(product))
        setCartBtn('Remove From Cart')
    } else {
        dispatch(delItem(product))
        setCartBtn ('Add to Cart')
    }
}

  return (
    
        <div className='container my-5 py-4'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                    <img src= {product.img} alt= {product.name} height='350px' />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h5 className='display-5 fw-bold'>{product.name}</h5>
                    <hr />
                    <h4 className='my-4'> {product.price}</h4>
                    <p className='lead'>{product.description}</p>
                    <button onClick={() => handleCart(product)} 
                    className='btn btn-warning my-5'>{cartBtn}</button>
                    <button className='btn btn-warning'> Go to Cart </button>
                </div>
            </div>
        </div>
  );
}

export default ProductDetail