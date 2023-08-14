import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';

const productsArr = [
  {
    _id: 401,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    _id: 402,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    _id: 403,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    _id: 404,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
    _id: 405,
    title: 'MacBook Air',
    price: 500,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1664502036215',
  },
  {
    _id: 406,
    title: 'Dell Inspiron 7420 2in1 Laptop',
    price: 300,
    imageUrl: 'https://m.media-amazon.com/images/I/51tRMZKn4tL._SX679_.jpg',
  }
]

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home productsArr={productsArr}/> } />
        <Route path="cart" element={ <Cart/> } />
      </Routes>
    </div>
  )
}

export default App;