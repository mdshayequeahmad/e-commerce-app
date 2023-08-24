import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/eCommerceSlice';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const _id = product.title;
    const isString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = isString(_id);

    const productDetailsHandler = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: product,
            },
        })
    };

    return (
        <div>
            <div style={{ marginTop: "50px" }}>
                <Col className="d-flex justify-content-around">
                    <Card style={{ width: '20rem', padding: "10px" }}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Img onClick={productDetailsHandler} variant="top" src={product.imageUrl} />
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
            </div>
        </div>
    )
}

export default Products;