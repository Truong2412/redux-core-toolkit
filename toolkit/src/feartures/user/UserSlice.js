import { createSlice } from "@reduxjs/toolkit";
const initValue = {
      token: null,
      asset: 0
  }
  
export const userSlice = createSlice({
    name: 'user',
    initialState: initValue,
    reducers: {
        login: (state,action)=>{
            state.token = action.payload.token;
            state.asset = action.payload.asset
        },
        logout: (state)=>{
            state.token = null;
            state.asset = 0;
        },
    }
})


