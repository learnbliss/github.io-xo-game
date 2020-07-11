import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import game from './reducers/game';

export default configureStore({
  reducer: {
    counter: counterReducer,
    game,
  },
});
