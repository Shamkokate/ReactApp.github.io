import React from 'react'
import AccessoriesData from './AccessoriesData'
import { NavLink } from 'react-router-dom'
import Mobiles from './Mobiles'

const Accessories = () => {
  const cardItem = (item) => {
    return (
      <div className='card my-5 py-3' key={item.id} style={{ width: '18rem' }}>
        <img src={item.img} className='card-img-top' alt={item.name} style={{ width: '16rem' }}></img>
        <div className='card-body text-center'>
          <h5 className='card-title'> {item.name} </h5>
          <p>Rating: {item.rating}  </p>
          <p className='card-text'> <h5>₹ {item.price} </h5></p>
          <NavLink to={`/product/${item.id}`} className='nav-link btn btn-warning'>
            Buy Now </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className='accessoriesPage'>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2> Accessories </h2>
            <hr />
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-around'>
            {AccessoriesData.map(cardItem)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accessories