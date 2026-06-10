import { createSlice } from '@reduxjs/toolkit';

const savedUser = localStorage.getItem('userSession');
const savedWishlist = localStorage.getItem('wishlistItems');

const initialState = {
  isAuthenticated: !!savedUser,
  userInfo: savedUser ? JSON.parse(savedUser) : null,
  wishlist: savedWishlist ? JSON.parse(savedWishlist) : [],
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (email && password.length >= 6) {
        state.isAuthenticated = true;
        state.userInfo = { email, name: email.split('@')[0] };
        state.error = null;
        localStorage.setItem('userSession', JSON.stringify(state.userInfo));
      } else {
        state.error = 'Invalid credentials. Password must be at least 6 characters.';
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.error = null;
      localStorage.removeItem('userSession');
    },
    toggleWishlist: (state, action) => {
      const productId = action.payload;
      if (state.wishlist.includes(productId)) {
        state.wishlist = state.wishlist.filter(id => id !== productId);
      } else {
        state.wishlist.push(productId);
      }
      localStorage.setItem('wishlistItems', JSON.stringify(state.wishlist));
    }
  }
});

export const { loginUser, logoutUser, toggleWishlist } = userSlice.actions;
export default userSlice.reducer;