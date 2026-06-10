import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductList from './pages/ProductList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/common/Modal';

function App() {
  // Navigation views: 'shop' | 'wishlist' | 'cart' | 'checkout' | 'success'
  const [activeView, setActiveView] = useState('shop');

  return (
    <div>
      <div onClick={(e) => {
        if (e.target.closest('.cart-icon-wrapper')) setActiveView('cart');
        if (e.target.closest('.logo')) setActiveView('shop');
        if (e.target.textContent === 'Shop') setActiveView('shop');
        if (e.target.textContent === 'Home') setActiveView('shop');
      }}>
        <Header onShowWishlist={() => setActiveView('wishlist')} />
      </div>

      <main className="container" style={{ minHeight: 'calc(100vh - 70px)', padding: '2rem 1.5rem' }}>
        {activeView === 'shop' && <ProductList viewWishlistOnly={false} />}
        {activeView === 'wishlist' && <ProductList viewWishlistOnly={true} />}
        
        {activeView === 'cart' && (
          <Cart onNavigateToCheckout={() => setActiveView('checkout')} />
        )}
        
        {activeView === 'checkout' && (
          <Checkout onOrderSuccess={() => setActiveView('success')} />
        )}

        {activeView === 'success' && (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#16a34a', fontSize: '2rem', marginBottom: '1rem' }}>🎉 Order Placed Successfully at NoidaShop!</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>Thank you for your purchase. Your invoice tracking receipt has been processed in local currency.</p>
            <button 
              onClick={() => setActiveView('shop')}
              style={{ padding: '0.75rem 1.5rem', background: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
            >
              Return to Catalog
            </button>
          </div>
        )}
      </main>

      {/* Global Product inspect detail pop-up modal view layer */}
      <Modal />
    </div>
  );
}

export default App;