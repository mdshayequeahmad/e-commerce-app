import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';

const Store = ({ productsArr }) => {
    return (
        <div>
            <Header />
            <div style={{marginTop: "100px"}}>
                <Products products={productsArr} />
            </div>
        </div>
    )
}

export default Store;