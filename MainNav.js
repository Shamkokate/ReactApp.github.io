import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartBtn from './Buttons/CartBtn';
import Category from './Category';
import Brand from './Brand';
import Price from './Price';
import Rating from './Rating';
import { MenuItem } from './MenuItem';
import CategoryRating from './CategoryRating';
import CategoryPrice from './CategoryPrice';

const MainNav = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mainNav fixed-top'>
      <Container fluid>
        <Navbar.Brand href="/home"><img src='./get.png' height={'60px'} width={"100px"} className='ms-3 p-1'></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/home' className='nav-link title1'> Home </NavLink>
            <NavLink to='/product' className='nav-link title1'>Product</NavLink>
            <NavLink to='/accessories' className='nav-link title1'>Accessories</NavLink>
            <NavLink to='/resell' className='nav-link title1'>Resell</NavLink>

            <CartBtn />

          {/*  <NavLink to='/cartBtn' className='nav-link' title='CartBtn'> Cart
            </NavLink>*/}
         

          <NavLink to='login' className='nav-link title1' title='Login'> 
          <i class="fa-solid fa-right-to-bracket"></i> Login </NavLink>

          <NavDropdown title="Categories" id="collasible-nav-dropdown">
              
             {/* <NavDropdown.Item>
              <NavLink to='/categoryprice' className='nav-link dropItem'>Price</NavLink>
                </NavDropdown.Item>*/}

                <NavDropdown.Item>
              <NavLink to='/categoryrating' className='nav-link dropItem'>Rating</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
              <NavLink to='/category' className='nav-link dropItem'>Brand</NavLink>
                </NavDropdown.Item>

            </NavDropdown>
            
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="bg-primary">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default MainNav