import React from 'react'

const Footer = () => {
  return (
        <div className='footer bg-dark varient-dark'>
            <div className='footerData'>
                <h6> Know About Us</h6>
                <ul>
                    <li>About Us </li>
                    <li> Contact Us </li>
                    <li> Our Services </li>
                </ul>
            </div>
            <div>
                <h6> Follow Us On</h6>
                <ul>
                    <li><i class="fa-brands fa-facebook-f"></i> Facebook</li>
                    <li> <i class="fa-brands fa-twitter"></i> Twitter </li>
                    <li> <i class="fa-brands fa-instagram"></i> Instagram</li>
                </ul>
            </div>
            <div> 
                <h6> Let Us Help You</h6>
                <ul>
                    <li>Your Account </li>
                    <li> Visit Our Site </li>
                    <li> Help </li>
                </ul>
            </div>
        </div>
  )
}

export default Footer