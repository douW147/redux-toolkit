import contactsReducer,{ contactsExtraReducer } from "../reducers/contacts";
import initialContactsState from "../data/contacts";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts-list",
    initialState: initialContactsState,
    reducers: contactsReducer,
    extraReducers: contactsExtraReducer
});

export default contactsSlice;

