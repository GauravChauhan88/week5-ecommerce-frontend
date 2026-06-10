import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleWishlist } from '../../store/userSlice';
import { setProductDetail } from '../../store/productSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user.wishlist);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
  src={product.image} 
  alt={product.name} 
  className="product-img" 
  loading="lazy" 
  onClick={() => dispatch(setProductDetail(product.id))}
  style={{ cursor: 'pointer' }}
  onError={(e) => {
    // If the main image fails, swap it with a stable placeholder
    e.target.onerror = null; 
    e.target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80';
  }}
/>
        <span className="product-category-tag">{product.category}</span>
        
        {/* Heart Icon Button */}
        <button 
          className={`wishlist-heart-btn ${isWishlisted ? 'liked' : ''}`}
          onClick={() => dispatch(toggleWishlist(product.id))}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-title" onClick={() => dispatch(setProductDetail(product.id))} style={{ cursor: 'pointer' }}>
          {product.name}
        </h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="product-meta">
          <span className="product-rating">⭐ {product.rating}</span>
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;