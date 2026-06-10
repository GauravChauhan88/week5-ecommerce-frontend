import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
import './Pages.css';

const ProductList = ({ viewWishlistOnly }) => {
  const products = useSelector((state) => state.product.items);
  const wishlist = useSelector((state) => state.user.wishlist);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Generate live matching suggestions for autocomplete list
  const autocompleteSuggestions = products
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 1)
    .slice(0, 4);

  const filteredProducts = products
    .filter((product) => {
      if (viewWishlistOnly) return wishlist.includes(product.id);
      
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-list-page">
      {viewWishlistOnly && <h2 style={{ marginBottom: '1.5rem' }}>❤️ Your Wishlist Collection</h2>}

      {!viewWishlistOnly && (
        <div className="controls-ribbon">
          <div className="search-box-container">
            <input 
              type="text" 
              placeholder="Search premium tech products..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}

            {/* Auto-Complete Prediction Dropdown Frame */}
            {showSuggestions && autocompleteSuggestions.length > 0 && (
              <div className="autocomplete-dropdown-panel" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '6px', zindex: 50, marginTop: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                {autocompleteSuggestions.map(suggestion => (
                  <div 
                    key={suggestion.id} 
                    className="suggestion-row-item"
                    style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #f1f5f9', fontSize: '0.875rem' }}
                    onClick={() => {
                      setSearchQuery(suggestion.name);
                      setShowSuggestions(false);
                    }}
                  >
                    🔍 {suggestion.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdowns">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="control-select">
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
            </select>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="control-select">
              <option value="default">Sort By: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="no-products-fallback">
          <h3>No items found.</h3>
          <p>Try resetting your selection filters.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;