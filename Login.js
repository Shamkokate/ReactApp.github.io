import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

 // const {uname, setUname} = useState("");
 // const {password, setPassword} = useState("");
 
 const [inputs, setInputes] = useState({});
 const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    //console.log(password);
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

    <div className='loginForm'>
      <form className='form mx-auto py-3' onSubmit={handleSubmit}>
        <fieldset>
          <legend> Login </legend>
          <div className='form-group'>
            <label> Enter Email ID </label>
            <input type='email' name='email' value={inputs.email || ""} 
            className='form-control' onChange={handleChange} 
            />
          </div>
          <div className='form-group'>
            <label> Enter Username </label>
            <input type='text' name='uname'  value={inputs.uname || ""} 
            className='form-control' onChange={handleChange} 
            />
          </div>
          <div className='form-group'>
            <label> Enter Passward </label>
            <input type='text' name='password' value={inputs.password || ""} 
            className='form-control' onChange={handleChange} 
            />
          </div>
          <br />
          <button type='submit' className='bg-primary rounded-5 btn btn-outline text-white'>Login</button>
        </fieldset>
      </form>

    </div>
    

  )
}

export default Login