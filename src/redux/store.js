import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import productReducer from './reducers/ProductReducer';
import UserReducer from './reducers/UserReducer';
import ForgetPassReduer from './reducers/ForgetPassReduer';

const authPersistConfig = {
  key: 'userAuth',
  storage: AsyncStorage,
  // whitelist: ['auth'],
};

const combinedReducer = combineReducers({
  productData: productReducer,
  forgetPass: ForgetPassReduer,

  userAuth: persistReducer(authPersistConfig, UserReducer),
});

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

export default Store;

export const persistor = persistStore(Store);
