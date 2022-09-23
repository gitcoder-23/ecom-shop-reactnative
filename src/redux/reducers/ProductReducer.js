import {createReducer, createSlice} from '@reduxjs/toolkit';
import {getProduct, getFilteredProduct} from '../actions/ProductAction';

const initialState = {
  allProducts: [],
  filteredProduct: [],
  isAuthenticated: false,
  loading: true,
  error: true,
  isSuccess: false,
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState: initialState,
  // action based reducers
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.allProducts = action.payload;
    });

    builder.addCase(getProduct.rejected, state => {
      state.loading = false;
      state.error = true;
    });

    // filtered product

    builder.addCase(getFilteredProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(getFilteredProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.filteredProduct = action.payload;
    });

    builder.addCase(getFilteredProduct.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default productReducer.reducer;

// const initialState = {
//   isAuthenticated: false,
// };

// export const productsReducer = createReducer(initialState, {
//   allProductRequest: state => {
//     state.loading = true;
//   },
//   allProductSuccess: (state, action) => {
//     (state.loading = false),
//       (state.products = action.payload.products),
//       (state.productsCount = action.payload.productsCount);
//     state.resultPerPage = action.payload.resultPerPage;
//     state.filteredProductsCount = action.payload.filteredProductsCount;
//   },
//   allProductFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
// });
