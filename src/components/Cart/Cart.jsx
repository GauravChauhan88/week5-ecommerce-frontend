import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import './Cart.css';

const Cart = ({ onNavigateToCheckout }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, currentQuantity, increment) => {
    const nextQuantity = currentQuantity + increment;
    if (nextQuantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: nextQuantity }));
    }
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? (subtotal > 2000 ? 0 : 99) : 0;
  const tax = subtotal * 0.12; // Simulated 12% GST structure
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-header">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-state">
          <p>Your shopping basket is currently empty.</p>
          <p className="subtext">Add premium items from our product catalog to get started.</p>
        </div>
      ) : (
        <div className="cart-workspace">
          {/* Cart Items List Grid Column */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-unit-price">₹{item.price.toLocaleString('en-IN')} each</p>
                </div>

                <div className="quantity-management-bar">
                  <button 
                    className="qty-adjust-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                  >
                    -
                  </button>
                  <span className="qty-display-badge">{item.quantity}</span>
                  <button 
                    className="qty-adjust-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-pricing-zone">
                  <p className="item-accumulated-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  <button 
                    className="remove-row-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Order Summary Card Panel */}
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <hr className="divider-line" />
            
            <div className="summary-row-line">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row-line">
              <span>Shipping Charge</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div className="summary-row-line">
              <span>Estimated GST (12%)</span>
              <span>₹{tax.toLocaleString('en-IN')}</span>
            </div>
            
            <hr className="divider-line" />
            <div className="summary-row-line total-price-bold">
              <span>Grand Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button className="proceed-checkout-btn" onClick={onNavigateToCheckout}>
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;