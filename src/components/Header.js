import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsCartPlus } from 'react-icons/bs';

const Header = () => {
    const productData = useSelector((state) => state.ecommerce.productData);
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Link to="cart">
                            <BsCartPlus style={{ height: "25px", width: "40px" }} /> <span className="position-absolute top-20 start-97 translate-middle badge rounded-pill bg-danger">{productData.length}</span>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;