import React from 'react'  
import {BsFillTelephoneFill,BsSuitHeart} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {ImLocation} from "react-icons/im"
import {BiDollar} from "react-icons/bi"
import {AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Select from 'react-bootstrap/FormSelect';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./Header.css"
function Header() {
    const style = { color: "red"}
  return (
    <div className='container-fluid px-0'>
        {/* First Section */}
    <div className="Firstp row justify-content-center align-items-center overflow-hidden text-light py-2">
        <div className="col-6 col-lg-5 text-start text-lg-start justify-content-center">
        <a  className='linkh px-lg-2 mx-1'><BsFillTelephoneFill style={style}/>+021-95-51-84</a>
        <br className=' d-block d-md-none'/>
        <a  className='linkh px-lg-2 mx-1'><MdEmail style={style}/>email@email.com</a>
        <br className=' d-block d-md-none'/>
        <a  className='linkh px-lg-2 mx-1'><ImLocation style={style}/>1734 Stonecoal Road</a>
        </div>
        <div className="col-5 m-0 p-0 text-start text-lg-center">
        <a  className='linkh px-2'><BiDollar style={style}/>USD</a>
        <br className=' d-block d-md-none'/>
        <a  className='linkh px-2'><AiOutlineUser style={style}/>My Account</a>
        </div>
    </div>
        {/* Second Section */}
        <div class="container-fluid px-0">
        <Navbar className="navb py-0" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="">
        <Navbar.Brand><img src='./Logo.png' alt='wait for loading'/></Navbar.Brand>
        
          <Nav className="m-auto">
      <Form
      className='d-inline-flex'>
        <Select className='selectsect' aria-label="Default">
      <option class="">All Categories</option>
      <option value="1">Category 1</option>
      <option value="2">Category 2</option>
      <option value="3">Category 3</option>
    </Select>
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="searchinput w-100"
            />
            <Button className='btn searchbtn'>Search</Button>
          </Form>
          </Nav>
        
          <Nav>
          <div className="d-inline-flex py-3">
          <span  class=" text-light position-relative">
          <BsSuitHeart className='wishlistic'/>
         <br/> Your Wishlist
  <span class="badge position-absolute top-0  translate-middle badge rounded-pill bg-danger">
    2
  </span>
</span>
<button  class="cart  text-light position-relative">
          <AiOutlineShoppingCart className='wishlistic'/>
         <br/> Your Cart
  <span class="badge position-absolute top-0  translate-middle badge rounded-pill bg-danger">
    3
  </span>
</button>
</div>
          </Nav>
      </Container>
    </Navbar>
    {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 py-0">
          <Container fluid className=" ctl">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="Tgbtn" ></Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-dark"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body className='textcolor'>
                <Nav className="flex-grow-1 px-lg-5 mx-lg-5">
                  <Nav.Link className='act active '>Home</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Hot Deals</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Categories</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Laptops</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Smartphones</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Cameras</Nav.Link>
                  <Nav.Link className='Linkne px-0 mx-lg-2' >Accessories</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
      ))}  
        </div>
  
      
    </div>
  )
}

export default Header

