import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name : null,
    emailId : null, 
    isAuthenticated : false, 
    token : null, 
    userType : null, 
  },
  reducers: {
    login : (state, action) => {
        state.name = action.payload.name ;
        state.isAuthenticated = true ;
        state.emailId = action.payload.emailId ;
        state.token = action.payload.token ;
        state.userType = action.payload.userType ;
    },
    logout : (state, action) => {
        state.name = "" ;
        state.isAuthenticated = false ;
        state.emailId = "" ;
        state.token = "" ;
        state.userType = "" ;
    }
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
