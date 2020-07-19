import { configureStore } from '@reduxjs/toolkit';
import showBoxReducer from '../../components/ShowBox/showBoxSlice';

export default configureStore({
  reducer: {
    showBox: showBoxReducer,
  },
});
