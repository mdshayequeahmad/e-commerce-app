import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';

const Home = ({ productsArr }) => {
    return (
        <div>
            <Header />
            <Products products={productsArr} />
        </div>
    )
}

export default Home;