import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './api/apiSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});
