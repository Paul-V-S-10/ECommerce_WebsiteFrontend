import React from 'react';
import './PaymentDetails.css';

const PaymentDetails = ({ paymentDetails }) => {
  const calculateTotalAmount = () => {
    const { price, quantity, deliveryCharges } = paymentDetails;
    return price * quantity + deliveryCharges;
  };

  return (
    <div className="payment-details">
      <div className="payment-info">
        <div className="payment-item">
          <span>Price of Item:</span> <span>${paymentDetails.price}</span>
        </div>
        <div className="payment-item">
          <span>Number of Items:</span> <span>{paymentDetails.quantity}</span>
        </div>
        <div className="payment-item">
          <span>Delivery Charges:</span> <span>${paymentDetails.deliveryCharges}</span>
        </div>
        <div className="payment-item total-amount">
          <span>Total Amount:</span> <span>${calculateTotalAmount()}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;