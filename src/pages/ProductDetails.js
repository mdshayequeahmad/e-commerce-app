import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import { addToCart } from '../redux/eCommerceSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);

  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Product Details</h1>
        <div className='d-flex' style={{ marginTop: "50px" }}>
          <div style={{ marginInline: "20px" }}>
              <img style={{ height: "440px", width: "600px" }} src={details.imageUrl} />
          </div>
          <div style={{ marginInline: "20px" }}>
            <h2>{details.title}</h2>
            <h4 className='my-4'>$ {details.price}</h4>
            <p>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              (10 Customer review)
            </p>
            <p className='my-4'>{details.des}</p>
            <div className='my-4'>
              <Button onClick={(e) => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} variant="light">-</Button>
              <span className='mx-4'>{baseQty}</span>
              <Button onClick={(e) => setBaseQty(baseQty + 1)} variant="light">+</Button>
            </div>
            <Button
              onClick={() => dispatch(addToCart({
                _id: details._id,
                title: details.title,
                price: details.price,
                quantity: baseQty,
                image: details.imageUrl
              }))}
              variant="primary"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;