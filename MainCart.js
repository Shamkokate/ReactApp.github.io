import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from './Redux/Actions/Index';
import { NavLink } from 'react-router-dom';
import Checkout from './Checkout';
import {Scrollbars} from 'react-custom-scrollbars-2'


const MainCart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()


  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return (
      
      <div className='px-4 my-5 bg-light rounden-3 oneCart' key={cartItem.id}>
        <div className='container py-4 cartContaint'>
          <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label='close'></button>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img src={cartItem.img} alt={cartItem.name}
                height='170px' width='180px' />
            </div>
            <div className='col-md-4'>
              <h3>{cartItem.name}</h3>
              <p className='lead fw-bold'>₹ {cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    
    );
  }

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounden-3 py-5 emptyCart'>
        <div className='container py-4'>
          <div className='row'>
            <h3> Your Cart is Empty.</h3>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className='productCart'>
      <div className='container'>
        <div className='row'>
          <NavLink to='/checkout' className='btn btn-outline-primary 
        mb-5 w-25 mx-auto'>Proceed To Checkout </NavLink>
        </div>
      </div>
      </div>
    );
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
}

export default MainCart