import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import { Row } from 'react-bootstrap';

const Store = ({ products }) => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "50px" }}>
                <Row xs={1} md={2} className="g-4">
                    {products.map((item) => (
                        <Products key={item._id} product={item} />
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Store;