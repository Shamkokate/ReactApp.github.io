import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Resell = () => {

  const [inputs, setInputes] = useState({});
  const handleSubmit = (event) => {
    event.preventDfault();
    console.log(inputs);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = {
      ...inputs,
      [name]: value
    }
    setInputes(obj);
  }
  return (

    <div className='resellForm'>
      <form className='form mx-auto my-1' onSubmit={handleSubmit}>
        <formfield>
          <legend>Resell Form </legend>
          <div className="form-group mb-3" controlId="formBasicBrand">
            <Form.Select aria-label="Default select example">
              <option>Select Brand</option>
              <option> Apple </option>
              <option> Xioami </option>
              <option> Samsung </option>
              <option> Motorola </option>
              <option> Oneplus </option>
              <option> Vivo </option>
              <option> Oppo </option>
              <option> Realme </option>

            </Form.Select>
          </div>

          <div className='form-group'>
            <label> Model </label>
            <input type='text' name='model' value={inputs.model || ''}
              className='form-control' onChange={handleChange} />
          </div>
          <br />

          <div className='form-group'>
            <label> Address for Pickup</label>
            <br />
            <textarea type='text' name='address'
              value={inputs.address || ''}
              className='form-control' onChange={handleChange}
              cols='5'
              rows='3'>
            </textarea>

          </div>
          <br />

          <Button variant="primary" type="submit" className='btn btn-primary text-white'>
            Sell Now
          </Button>
        </formfield>
      </form>
    </div>

  )
}

export default Resell