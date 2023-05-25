import React, { useState } from 'react'
import Mobiles from './Mobiles';
import { NavLink } from 'react-router-dom';


const Category = () => {

  const [data, setData] = useState(Mobiles);
  const filterResult = (catItem) => {
    const result = Mobiles.filter((curData) => {
      return curData.brand === catItem;
    }
    );
    setData(result);
  }

  return (

    <div className='productPage'>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2> Smartphones By Brands </h2>
            <div className='mx-5 ctgBtn'>
              <button className='btn btn-info ctgBtn1' onClick={() => filterResult('Xiaomi')}> Xiaomi </button>
              <button className='btn btn-info ctgBtn1' onClick={() => filterResult('samsung')}> Samsung </button>
              <button className='btn btn-info ctgBtn1' onClick={() => filterResult('oneplus')}> Oneplus </button>
              <button className='btn btn-info ctgBtn1' onClick={() => filterResult('realme')}> Realme </button>
              <button className='btn btn-info ctgBtn1' onClick={() => setData(Mobiles)}> All </button>
              <hr />
            </div>
          </div>
        </div>


        <div className='container'>
          <div className='row mx-2 justify-content-around'>

            {data.map((values) => {
              const { id, name, price, img, rating } = values;
              return (

                <div className='col mb-4' key={id}>
                  <div class="card my-4 py-2" style={{ width: '18rem' }}>
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                      <h6 class="card-title">{name}</h6>
                      <p>Rating: {rating} </p>
                      <p class="card-text">₹ {price}</p>
                      <NavLink to={`/product/${id}`} className="nav-link btn btn-warning">
                        Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              );
            }

            )}

          </div>
        </div>
      </div >

    </div >

  )
}
export default Category;