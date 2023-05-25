import React from 'react'

const Rating = () => {
  return (
    <>
        <div class="dropend">
        <button class="btn btn-secondary dropdown-toggle" type="button"
          id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Rating
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">3.0 - 3.9</a></li>
          <li><a class="dropdown-item" href="#">4.0 - 4.5</a></li>
          <li><a class="dropdown-item" href="#"> Above 4.5 </a></li>
        </ul>
      </div>
    </>
  )
}

export default Rating;