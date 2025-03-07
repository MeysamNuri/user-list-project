import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((user) => user.id !== action.payload.id);
    },
    
  },
});

export const { addToFavorites, removeFromFavorites } = usersSlice.actions;
export default usersSlice.reducer;