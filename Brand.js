import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Brand = () => {
  return (
    <>
      <div class="btn-group dropend">
        <button class="btn btn-secondary dropdown-toggle" type="button"
          id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Brand
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="">Xaiomi</a></li>
          <li><a class="dropdown-item" href="">Samsung</a></li>
          <li><a class="dropdown-item" href="">Realme</a></li>
          <li><a class="dropdown-item" href="">Oneplus</a></li>
        </ul>
      </div>
    </>
  )
}

export default Brand;