import React, { useState } from 'react'
import Mobiles from './Mobiles';
import { NavLink } from 'react-router-dom';


const CategoryPrice = () => {

  const [data, setData] = useState(Mobiles);
  const filterResult = (catItem) => {
    const result = Mobiles.filter((curData) => {
      return curData.price == catItem;
    }
    );
    setData(result);
  }

  return (

    <div className='productPage'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2> Smartphones By Price </h2>
            <button className='btn btn-info ctgBtn1' onClick={() => filterResult('below 10K')}> Below 10K </button>
            <button className='btn btn-info ctgBtn1' onClick={() => filterResult('10K-20K')}> 10K - 20K </button>
            <button className='btn btn-info ctgBtn1' onClick={() => filterResult('above 20K')}> Above 20K </button>
            <button className='btn btn-info ctgBtn1' onClick={() => setData(Mobiles)}> All </button>
            
            <hr/>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            {data.map((values) => {
              const { id, name, price, img, rating} = values;
              return (
                <div className='col mb-4 my-4 py-2' key={id}>
                  <div class="card " style={{ width: '18rem' }}>
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
export default CategoryPrice;