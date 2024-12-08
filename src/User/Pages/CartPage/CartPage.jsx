// CartPage.js
import React from 'react';
import ProductSection from '../ProductSection/ProductSection';
import NavbarModified from '../NavbarModified/NavbarModified';


const CartPage = () => {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      description: 'This is a description for Product 1.',
      price: 29.99,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      description: 'This is a description for Product 2.',
      price: 39.99,
    },
    // Add more products as needed
  ];

  const button1Name = 'Buy Now';
    const button2Name = 'Remove';

  const handleButton1 = (productId) => {
    console.log(`Button 1 clicked for product ${productId}`);
    // Implement functionality here
  };

  const handleButton2 = (productId) => {
    console.log(`Button 2 clicked for product ${productId}`);
    // Implement functionality here
  };

  return (
    <div className="cart-page">
      <NavbarModified NavbarHeading="Cart"/>
      {products.map(product => (
        <ProductSection
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          button1Name={button1Name}
          button2Name={button2Name}
          onButton1={() => handleButton1(product.id)}
          onButton2={() => handleButton2(product.id)}
        />
      ))}
    </div>
  );
};

export default CartPage;