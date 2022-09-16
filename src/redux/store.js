import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import productReducer from './reducers/ProductReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // whitelist: ['auth'],
};

const combinedReducer = combineReducers({productData: productReducer});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const Store = configureStore({
  reducer: rootReducer,
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

// const Store = configureStore({
//   reducer: {
//     products: productReducer,
//   },
//   middleware: getDefaultMiddleware => {
//     if (__DEV__) {
//       const createDebugger = require('redux-flipper').default;
//       return getDefaultMiddleware({serializableCheck: false}).concat(
//         createDebugger(),
//       );
//     }
//     return getDefaultMiddleware();
//   },
// });

export default Store;

// export const persistor = persistStore(Store);
