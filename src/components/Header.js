import React from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsCartPlus } from 'react-icons/bs';

const Header = () => {
    const productData = useSelector((state) => state.ecommerce.productData);

    return (
        <div>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0' style={{ marginLeft: "350px" }}>
                            <Link to="/" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item'>HOME</li></Link>
                            <Link to="/store" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item mx-5'>STORE</li></Link>
                            <Link to="/aboutus" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item'>About</li></Link>
                            <Link to="/contactus" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item mx-5'>Contact Us</li></Link>
                        </ul>
                        <Link to="/cart">
                            <BsCartPlus style={{ height: "25px", width: "40px" }} /> <span className="position-absolute top-20 start-97 translate-middle badge rounded-pill bg-danger">{productData.length}</span>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;