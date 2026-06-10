import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  { id: 1, name: 'Wireless Noise-Canceling Headphones', price: 8499, category: 'Electronics', rating: 4.5, image: 'headphones.jpg', description: 'High-fidelity audio with advanced noise-canceling technology, perfect for blocking out metro commutes.' },
  { id: 2, name: 'Minimalist Leather Smartphone Case', price: 1299, category: 'Accessories', rating: 4.2, image: 'phone-case.jpg', description: 'Premium leather case matching modern aesthetics with standard drop protection.' },
  { id: 3, name: 'Braided USB-C Fast Charging Cable', price: 799, category: 'Electronics', rating: 4.8, image: 'cable.jpg', description: 'Durable nylon braided cord supporting maximum data throughput and ultra-fast charging speeds.' },
  { id: 4, name: 'Ergonomic Mechanical Keyboard', price: 6500, category: 'Electronics', rating: 4.7, image: 'keyboard.jpg', description: 'Hot-swappable RGB mechanical keyboard built for ultimate coding and productivity sessions.' },
  { id: 5, name: 'Water-Resistant Commuter Backpack', price: 2499, category: 'Accessories', rating: 4.4, image: 'backpack.jpg', description: 'Spacious daily backpack with dedicated laptop compartments and weather-proofing.' },
  { id: 6, name: 'Smart Fitness Tracker Watch', price: 3999, category: 'Electronics', rating: 4.0, image: 'watch.jpg', description: 'Tracks daily steps, real-time heart rate, workout modes, and notifications instantly.' },
  { id: 7, name: 'Wireless Ergonomic Vertical Mouse', price: 1899, category: 'Electronics', rating: 4.3, image: 'mouse.jpg', description: 'Designed to reduce muscle strain and improve hand posture during long working hours.' },
  { id: 8, name: 'Anodized Aluminum Laptop Stand', price: 1499, category: 'Accessories', rating: 4.6, image: 'stand.jpg', description: 'Sleek, elevated metallic design optimized for ventilation and premium eye-level ergonomics.' },
  { id: 9, name: 'True Wireless Studio Earbuds', price: 2999, category: 'Electronics', rating: 4.1, image: 'earbuds.jpg', description: 'Ultra-lightweight baseline earbuds with deep bass profiles and splash water resistance.' },
  { id: 10, name: 'Desk Deskpad Protection Mat', price: 999, category: 'Accessories', rating: 4.5, image: 'deskpad.jpg', description: 'Extended desk felt surface providing smooth tracking space for your keyboard and mouse.' },
  { id: 11, name: '4K Ultra-HD Web Camera', price: 4500, category: 'Electronics', rating: 4.4, image: 'webcam.jpg', description: 'Crisp image quality with low-light correction sensors for online classes and professional meetings.' },
  { id: 12, name: 'Compact Magnetic Power Bank', price: 2199, category: 'Electronics', rating: 4.7, image: 'powerbank.jpg', description: '10,000mAh capacity snap-on backup power cell to keep your mobile devices operational all day.' }
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialProducts,
    selectedProduct: null,
  },
  reducers: {
    setProductDetail: (state, action) => {
      state.selectedProduct = state.items.find(p => p.id === action.payload) || null;
    },
    clearProductDetail: (state) => {
      state.selectedProduct = null;
    }
  }
});

export const { setProductDetail, clearProductDetail } = productSlice.actions;
export default productSlice.reducer;
