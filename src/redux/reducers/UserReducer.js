import {createReducer, createSlice} from '@reduxjs/toolkit';
import {userLoginAction} from '../actions/UserAction';

const initialState = {
  loginItem: {},
  isLoading: true,
  isAuthenticated: false,
  error: true,
  isSuccess: false,
  errorMessage: '',
};

const UserReducer = createSlice({
  name: 'userReducer',
  initialState: initialState,
  // action based reducers
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(userLoginAction.pending, state => {
      state.isLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.isAuthenticated = true;
        state.loginItem = newPayload;
        state.errorMessage = 'Login success';
      }
    });

    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isAuthenticated = false;
      state.errorMessage = 'Login failed';
    });
  },
});

export default UserReducer.reducer;
