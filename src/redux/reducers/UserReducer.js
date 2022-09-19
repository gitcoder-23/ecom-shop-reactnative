import {createReducer, createSlice} from '@reduxjs/toolkit';
import {
  userDataAction,
  userLoginAction,
  userSignupAction,
} from '../actions/UserAction';

const initialState = {
  loginItem: {},
  signupItem: {},
  isLoading: true,
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
      state.errorMessage = 'Logout success';
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: function (builder) {
    //login
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

    //signup
    builder.addCase(userSignupAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userSignupAction.fulfilled, (state, action) => {
      state.isLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.signupItem = newPayload;
        state.errorMessage = 'Signup success';
      }
    });

    builder.addCase(userSignupAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = 'Signup failed';
    });

    //user data

    builder.addCase(userDataAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userDataAction.fulfilled, (state, action) => {
      state.isLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.userItem = newPayload;
        state.errorMessage = 'User data get success';
      }
    });

    builder.addCase(userDataAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = 'User data get failed';
    });
  },
});

export const {logout} = UserReducer.actions;

export default UserReducer.reducer;
