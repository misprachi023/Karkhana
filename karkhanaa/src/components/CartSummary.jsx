import React from 'react';

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * 0.10;
  const gratuity = 4.00;
  const total = subtotal - discount + gratuity;

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="summary-detail">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-detail">
        <span>Discount (10%)</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="summary-detail">
        <span>Gratuity</span>
        <span>${gratuity.toFixed(2)}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="print-receipt-btn">Print Receipt</button>
    </div>
  );
};

export default CartSummary;
