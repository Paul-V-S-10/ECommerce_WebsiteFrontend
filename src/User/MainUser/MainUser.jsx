import React from 'react'
import './MainUser.css'
import Navbar from '../Pages/Navbar/Navbar'
import Carousel from '../Pages/Carousel/Carousel'
import ProductCard from '../Pages/Card/ProductCard'
import ImageCollage from '../Pages/ImageCollage/ImageCollage'
import Slider from '../Pages/Slider/Slider'
import ProductCardWrapper from '../Pages/ProductCardWrapper/ProductCardWrapper'
import ProductPage from '../Pages/ProductPage/ProductPage'
import Accordion from '../Pages/Accordion/Accordion'
import LoginSignup from '../Pages/LoginSignup/LoginSignup'
import CartPage from '../Pages/CartPage/CartPage'
import Footer from '../Pages/Footer/Footer'
import NavbarModified from '../Pages/NavbarModified/NavbarModified'
import CategoryPage from '../Pages/CategoryPage/CategoryPage'

const MainUser = () => {
  const images = [
    '/products/cameras/camera1.webp',
    '/products/cameras/camera2.webp',
    '/products/cameras/camera3.webp',
    '/products/guitars/guitar1.webp',
    '/products/guitars/guitar2.webp',
    '/products/guitars/guitar3.webp',
    '/products/guitars/guitar4.webp',
    '/products/guitars/guitar5.webp',
    '/products/guitars/guitar6.webp',
    '/products/perfumes/perfume1.webp',
    '/products/perfumes/perfume2.webp',
    '/products/watches/watch1.webp',
    '/products/watches/watch2.webp',

    // Add more image URLs here
  ];

  const products = [
    { name: 'Product 1', price: '19.99', image: '/products/cameras/camera1.webp' },
    { name: 'Product 2', price: '29.99', image: '/products/cameras/camera2.webp' },
    { name: 'Product 3', price: '39.99', image: '/products/cameras/camera3.webp' },
    { name: 'Product 4', price: '39.99', image: '/products/guitars/guitar1.webp' },
    { name: 'Product 5', price: '39.99', image: '/products/guitars/guitar2.webp' },
    { name: 'Product 6', price: '39.99', image: '/products/guitars/guitar3.webp' },
    { name: 'Product 7', price: '39.99', image: '/products/guitars/guitar4.webp' },
    { name: 'Product 8', price: '39.99', image: '/products/guitars/guitar5.webp' },
    { name: 'Product 9', price: '39.99', image: '/products/guitars/guitar6.webp' },
    { name: 'Product 10', price: '39.99', image: '/products/clothes/cloth1.webp' },
    { name: 'Product 11', price: '39.99', image: '/products/clothes/cloth2.webp' },
    { name: 'Product 12', price: '39.99', image: '/products/clothes/cloth3.webp' },
    { name: 'Product 13', price: '39.99', image: '/products/clothes/cloth4.webp' },
    { name: 'Product 14', price: '39.99', image: '/products/clothes/cloth5.webp' },
    { name: 'Product 15', price: '39.99', image: '/products/clothes/cloth6.webp' },
    { name: 'Product 16', price: '39.99', image: '/products/clothes/cloth7.webp' },
    { name: 'Product 17', price: '39.99', image: '/products/clothes/cloth8.webp' },
    { name: 'Product 18', price: '39.99', image: '/products/bottles/bottle1.webp' },
    { name: 'Product 19', price: '39.99', image: '/products/bottles/bottle2.webp' },
    // Add more products here
  ];


  const items = [
    { name: 'Product 1', price: '19.99', image: '/products/cameras/camera1.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 2', price: '29.99', image: '/products/cameras/camera2.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 3', price: '39.99', image: '/products/cameras/camera3.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 4', price: '39.99', image: '/products/guitars/guitar1.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 5', price: '39.99', image: '/products/guitars/guitar2.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 6', price: '39.99', image: '/products/guitars/guitar3.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 7', price: '39.99', image: '/products/guitars/guitar4.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 8', price: '39.99', image: '/products/guitars/guitar5.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 9', price: '39.99', image: '/products/guitars/guitar6.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 10', price: '39.99', image: '/products/clothes/cloth1.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 11', price: '39.99', image: '/products/clothes/cloth2.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 12', price: '39.99', image: '/products/clothes/cloth3.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 13', price: '39.99', image: '/products/clothes/cloth4.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 14', price: '39.99', image: '/products/clothes/cloth5.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 15', price: '39.99', image: '/products/clothes/cloth6.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 16', price: '39.99', image: '/products/clothes/cloth7.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 17', price: '39.99', image: '/products/clothes/cloth8.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 18', price: '39.99', image: '/products/bottles/bottle1.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    { name: 'Product 19', price: '39.99', image: '/products/bottles/bottle2.webp', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.' },
    // Add more products here
  ];

  const product = {
    imageSrc: '/products/bottles/bottle2.webp',
    productName: 'Product 16',
    price: 29.99,
    description: 'Product description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className="main-user-container">
      {/* <Navbar />
      <Carousel/>
      <ImageCollage products={products} />
      <Slider heading="Featured Products" items={items} />
      <ProductCardWrapper products={products} category="Category 1"/>
      <ProductCardWrapper products={products} category="Category 2"/> */}
      {/* <ProductPage
        imageSrc={product.imageSrc}
        productName={product.productName}
        price={product.price}
        description={product.description}
        /> */}
        {/* <ProductCard image='/products/product1.webp' name='Product 1' price='100'/> */}
        {/* <Accordion/> */}
        {/* <LoginSignup/> */}
        {/* <NavbarModified NavbarHeading="Cart"/> */}
        {/* <CartPage/> */}
        {/* <CategoryPage/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default MainUser