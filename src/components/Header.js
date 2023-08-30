import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/eCommerceSlice';
import { BsCartPlus } from 'react-icons/bs';

const Header = () => {
    const productData = useSelector((state) => state.ecommerce.productData);
    const token = useSelector((state) => state.ecommerce.token);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0' style={{ marginLeft: "300px" }}>
                            <Link to="/" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item'>HOME</li></Link>
                            <Link to="/store" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item mx-5'>STORE</li></Link>
                            <Link to="/aboutus" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item'>About</li></Link>
                            <Link to="/contactus" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item mx-5'>Contact Us</li></Link>
                            {token === null ? (
                                <Link to="/login" style={{ textDecorationLine: 'none', color: "black", textTransform: "uppercase" }}><li className='nav-item'>Login</li></Link>
                            ) : (
                                <Button onClick={logoutHandler} variant="light" style={{ color: "black", textTransform: "uppercase", marginLeft: "-15px" }}>Logout</Button>
                            )
                            }
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