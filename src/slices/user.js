import { createSlice } from "@reduxjs/toolkit";
import initialUser from "../data/user";
import userReducer from "../reducers/user";

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: userReducer
});

export default userSlice;