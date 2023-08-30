import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Cart = () => {
    const productData = useSelector((state) => state.ecommerce.productData);

    const [totalAmt, setTotalAmt] = useState("");

    useEffect(() => {
      let price = 0;
      productData.map((item) => {
        price += item.price * item.quantity;
        return price;
      });
      setTotalAmt(price);
    }, [productData])
    

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h1 style={{ marginLeft: "50px", marginTop: "50px" }}>Cart</h1>
                {productData.length === 0 ? (
                    <div className='ms-5'>
                        <h1 >Your Cart is Empty</h1>
                    </div>
                ) : (
                    <div style={{ marginTop: "10px", padding: "20px", }}>
                        {productData.map((cartItem) => (
                            <div key={cartItem._id} className='d-flex justify-content-between align-items-center' style={{ marginBottom: "40px", backgroundColor: "#e6ebe6", padding: "10px" }}>
                                <img src={cartItem.image} alt="img" style={{ height: "200px", width: "250px" }} />
                                <h2>{cartItem.title}</h2>
                                <p className='fw-bold'>$ {cartItem.price}</p>
                                <div className='justify-content-between'>
                                    <Button type="button" className="btn btn-secondary" disabled>{cartItem.quantity}</Button>
                                    <Button type="button" className="btn btn-danger" style={{ marginLeft: "20px" }}>Remove</Button>
                                </div>
                            </div>
                        ))}
                        <h2 style={{textAlign: "end"}}>Total <span className='fw-bold'>${totalAmt}</span> </h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;