import { configureStore } from '@reduxjs/toolkit';
import game from './reducers/game';

export default configureStore({
  reducer: {
    game,
  },
});
