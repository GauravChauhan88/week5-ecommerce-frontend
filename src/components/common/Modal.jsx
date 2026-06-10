import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearProductDetail } from '../../store/productSlice';
import { addToCart } from '../../store/cartSlice';
import './Modal.css';

const Modal = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => dispatch(clearProductDetail())}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-x" onClick={() => dispatch(clearProductDetail())}>✕</button>
        
        <div className="modal-split-body">
          <div className="modal-img-column">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          
          <div className="modal-info-column">
            <span className="modal-tag">{selectedProduct.category}</span>
            <h2>{selectedProduct.name}</h2>
            <div className="modal-rating-line">⭐ {selectedProduct.rating} / 5.0 Rating</div>
            <p className="modal-full-desc">{selectedProduct.description}</p>
            <div className="modal-price-tag">₹{selectedProduct.price.toLocaleString('en-IN')}</div>
            
            <button 
              className="modal-add-btn" 
              onClick={() => {
                dispatch(addToCart(selectedProduct));
                dispatch(clearProductDetail());
              }}
            >
              Add Product To Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;