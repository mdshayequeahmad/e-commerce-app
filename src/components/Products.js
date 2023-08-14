import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/eCommerceSlice';

const Products = ({ products }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{ marginTop: "50px" }}>
                <Row xs={1} md={2} className="g-4">
                    {products.map((product) => (
                        <Col key={product._id} className="d-flex justify-content-around">
                            <Card style={{ width: '20rem', padding: "10px" }}>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Img variant="top" src={product.imageUrl} />
                                <Card.Body>
                                    <Card.Text>
                                        $ {product.price}
                                    </Card.Text>
                                    <Button onClick={() => dispatch(addToCart({
                                        _id: product._id,
                                        title: product.title,
                                        price: product.price,
                                        quantity: 1,
                                        image: product.imageUrl
                                    }))}
                                        variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    )}
                </Row>
            </div>
        </div>
    )
}

export default Products;