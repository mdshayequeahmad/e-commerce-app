import React from 'react';
import { Routes, Route } from "react-router-dom";
import Store from './pages/Store';
import Cart from './pages/Cart';
import AboutUs from "./pages/AboutUs";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';

const productsArr = [
  {
    _id: 401,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  },
  {
    _id: 402,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  },
  {
    _id: 403,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  },
  {
    _id: 404,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  },
  {
    _id: 405,
    title: 'MacBook Air',
    price: 500,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1664502036215',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  },
  {
    _id: 406,
    title: 'Dell Inspiron 7420 2in1 Laptop',
    price: 300,
    imageUrl: 'https://m.media-amazon.com/images/I/51tRMZKn4tL._SX679_.jpg',
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique. Facilis voluptatibus, hic dolores voluptatem amet autem quibusdam iure voluptates sit error omnis quo optio repellat neque illum sequi fugit? Magni voluptas ipsa fugiat eius atque possimus incidunt illum, animi deserunt quas consequuntur, maxime voluptatem at dolor dignissimos sed non ducimus neque perspiciatis ipsum praesentium soluta ullam et expedita."
  }
]

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store products={productsArr} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App;