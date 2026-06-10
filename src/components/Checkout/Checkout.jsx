import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/userSlice';
import { clearCart } from '../../store/cartSlice';
import './Checkout.css';

const Checkout = ({ onOrderSuccess }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, error: authError } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.items);

  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Shipping Form States
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Explicit Client-Side Validations
    if (!fullName.trim()) errors.fullName = 'Full name is required.';
    if (!address.trim()) errors.address = 'Delivery address is required.';
    if (!city.trim()) errors.city = 'City name is required.';
    if (!/^\d{5,6}$/.test(zipCode.trim())) errors.zipCode = 'Provide a valid 5 or 6 digit ZIP code.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      dispatch(clearCart()); // Flush cart items on payment completion
      onOrderSuccess();
    }
  };

  // If the cart was cleared and order placed successfully, parent controls fallback
  if (!isAuthenticated) {
    return (
      <div className="checkout-auth-card">
        <h2>🔐 Secure Customer Authentication</h2>
        <p className="subtitle">You must be logged in to complete your transaction checkout.</p>
        
        <form onSubmit={handleLoginSubmit} className="checkout-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {authError && <p className="error-message-alert">{authError}</p>}
          <button type="submit" className="submit-action-btn">Sign In & Continue</button>
        </form>
      </div>
    );
  }

  return (
    <div className="shipping-checkout-card">
      <h2>🚚 Delivery & Shipping Details</h2>
      <p className="subtitle">Provide your delivery location coordinates below.</p>
      
      <form onSubmit={handleShippingSubmit} className="checkout-form">
        <div className="form-group">
          <label>Full Legal Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && <span className="field-error">{formErrors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input 
            type="text" 
            placeholder="123 Luxury Avenue" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {formErrors.address && <span className="field-error">{formErrors.address}</span>}
        </div>

        <div className="form-grid-2col">
          <div className="form-group">
            <label>City</label>
            <input 
              type="text" 
              placeholder="New Delhi" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {formErrors.city && <span className="field-error">{formErrors.city}</span>}
          </div>

          <div className="form-group">
            <label>ZIP / Postal Code</label>
            <input 
              type="text" 
              placeholder="110001" 
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            {formErrors.zipCode && <span className="field-error">{formErrors.zipCode}</span>}
          </div>
        </div>

        <button type="submit" className="submit-action-btn complete-order-color">
          Place Order & Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;