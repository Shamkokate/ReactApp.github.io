import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Mobiles from './Mobiles';
import { NavLink } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const Product = () => {

  const cardItem = (item) => {
    return (
      <div className='card my-3 py-3' key={item.id} style= {{ width: '18rem' }}>
        <img src= {item.img} className="card-img-top" alt= {item.name} style={{ width: '16rem' }}/>
        <div className='card-body text-center'>
          <h5 className='card-title'>{item.name}</h5>
          <p>Rating: {item.rating} </p>
              <p className='lead'>₹ {item.price} </p>
          <NavLink to={`/product/${item.id}`} className="nav-link btn btn-warning">
            Buy Now</NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className='productPage'>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2> Smartphones</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {Mobiles.map(cardItem)}
        </div>
      </div>
    </div>
  );
}

export default Product