import contactsSlice from "../slices/contacts";
import userSlice from "../slices/user";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

console.log(contactsSlice);

const allReducers = {
    contacts: contactsSlice.reducer,
    user: userSlice.reducer
}

const store = configureStore({
    reducer: allReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), logger]
});

export default store;