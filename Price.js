import React from 'react'

const Price = () => {
  return (
    <>
        <div class="dropend">
        <button class="btn btn-secondary dropdown-toggle" type="button"
          id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Price
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#"> Under 10K </a></li>
          <li><a class="dropdown-item" href="#"> 10K - 20K</a></li>
          <li><a class="dropdown-item" href="#"> Above 20K</a></li>
        </ul>
      </div>
    </>
  )
}

export default Price;