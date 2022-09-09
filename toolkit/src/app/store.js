import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../feartures/user/UserSlice";

export const store = configureStore({
    reducer: {
       user: userSlice.reducer,
    }
})