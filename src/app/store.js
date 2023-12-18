import { configureStore } from '@reduxjs/toolkit';
import counterSlice  from '../pages/home/index.js';

export default configureStore({
  reducer: {
    counter: counterSlice ,
  },
});
