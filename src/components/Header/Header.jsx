import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/userSlice';
import './Header.css';

const Header = ({ onShowWishlist }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, userInfo, wishlist } = useSelector((state) => state.user);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="main-header">
      <div className="header-container container">
        <div className="logo">
          <h2>Noida<span>Shop</span></h2>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          
          <div className="nav-actions">
            {/* Wishlist Indicator Button */}
            <div className="wishlist-icon-wrapper" onClick={onShowWishlist} style={{ cursor: 'pointer', position: 'relative', fontWeight: 500 }}>
              <span>❤️ Wishlist</span>
              {wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
            </div>

            <div className="cart-icon-wrapper">
              <span className="cart-label">🛒 Cart</span>
              {totalCartCount > 0 && <span className="cart-badge">{totalCartCount}</span>}
            </div>

            {isAuthenticated ? (
              <div className="user-profile">
                <span className="welcome-text">Hi, {userInfo?.name}</span>
                <button className="logout-btn" onClick={() => dispatch(logoutUser())}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="login-nav-btn">Sign In</button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;