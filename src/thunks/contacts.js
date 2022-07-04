import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
});

export const fetchContactsThunk = createAsyncThunk(
    "contacts/fetch",
    async() => {
        const response = await api.get("/contacts");
        return response.data;
    }
);

export const addContactsThunk = createAsyncThunk(
    "contacts/add",
    async(newContact) => {
        const response = await api({
            url: "/contacts",
            data: newContact,
            method: "POST"
        });
        return response.data
    }
);

export const editContactsThunk = createAsyncThunk(
    "contacts/add",
    async(editedContact) => {
        const response = await api({
            url: `/contacts/${editedContact.id}`,
            data: editedContact,
            method: "PUT"
        });
        return response.data
    }
);

export const deleteContactsThunk = createAsyncThunk(
    "contacts/add",
    async(id) => {
        const response = await api({
            url: `/contacts/${id}`,
            method: "DELETE"
        });
        return response.data
    }
);