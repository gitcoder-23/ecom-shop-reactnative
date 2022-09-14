import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {productsReducer} from './reducers/ProductReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // whitelist: ['auth'],
};

const Store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({serializableCheck: false}).concat(
        createDebugger(),
      );
    }
    return getDefaultMiddleware();
  },
});

export default Store;

// export const persistor = persistStore(Store);
