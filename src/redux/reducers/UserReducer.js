import {createReducer, createSlice} from '@reduxjs/toolkit';
import {
  userDataAction,
  userLoginAction,
  userSignupAction,
} from '../actions/UserAction';

const initialState = {
  loginItem: {},
  signupItem: {},
  isLoginLoading: true,
  isSigupLoading: true,
  isUserDataLoading: true,
  isForgetPassLoading: true,
  isAuthenticated: false,
  error: true,
  isSuccess: false,
  errorMessage: '',
  token: '',
  userItem: {},
};

const UserReducer = createSlice({
  name: 'userReducer',
  initialState: initialState,
  // action based reducers
  reducers: {
    logout: state => {
      state.loginItem.token = '';
      state.loginItem = {};
      state.userItem = {};
      state.signupItem = {};
      state.error = false;
      state.errorMessage = 'Logout success';
      state.isLoginLoading = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: function (builder) {
    //login
    builder.addCase(userLoginAction.pending, state => {
      state.isLoginLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.isAuthenticated = true;
        state.loginItem = newPayload;
        state.errorMessage = 'Login success';
      }
    });

    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.isLoginLoading = false;
      state.error = true;
      state.isAuthenticated = false;
      state.errorMessage = 'Login failed';
    });

    //signup
    builder.addCase(userSignupAction.pending, state => {
      state.isSigupLoading = true;
    });
    builder.addCase(userSignupAction.fulfilled, (state, action) => {
      state.isSigupLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.signupItem = newPayload;
        state.errorMessage = 'Signup success';
      }
    });

    builder.addCase(userSignupAction.rejected, (state, action) => {
      state.isSigupLoading = false;
      state.error = true;
      state.errorMessage = 'Signup failed';
    });

    //user get data

    builder.addCase(userDataAction.pending, state => {
      state.isUserDataLoading = true;
    });
    builder.addCase(userDataAction.fulfilled, (state, action) => {
      state.isUserDataLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.userItem = newPayload;
        state.errorMessage = 'User data get success';
      }
    });

    builder.addCase(userDataAction.rejected, (state, action) => {
      state.isUserDataLoading = false;
      state.error = true;
      state.errorMessage = 'User data get failed';
    });
  },
});

export const {logout} = UserReducer.actions;

export default UserReducer.reducer;
