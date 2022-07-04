import { fetchContactsThunk, addContactsThunk, deleteContactsThunk, editContactsThunk } from "../thunks/contacts";

const contactsReducer = {
    add: (state, action) => {
        state.data.push(action.payload);
    },

    remove: (state, action) => {
        const index = state.data.findIndex(contact => {
            return contact.id === action.payload
        });
        state.data.splice(index, 1);
    },

    update: (state, action) => {
        const index = state.data.findIndex(contact => {
            return contact.id === action.payload.id
        });
        state.data[index] = action.payload
    }
};

export const contactsExtraReducer = {
    [fetchContactsThunk.pending]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.data = [];
        state.error = "";
    },

    [fetchContactsThunk.fulfilled]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.data = action.payload;
        state.error = "";
    },

    [fetchContactsThunk.rejected]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.data = [];
        state.error = action.error
    },

    [addContactsThunk.pending]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = "";
    },

    [addContactsThunk.fulfilled]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.data.push(action.payload);
        state.error = "";
    },

    [addContactsThunk.rejected]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = action.error
    },

    [deleteContactsThunk.pending]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = "";
    },

    [deleteContactsThunk.fulfilled]: (state, action) => {
        state.status = action.meta.requestStatus;
        const index = state.data.findIndex(contact => {
            return contact.id === action.payload
        });
        state.data.splice(index, 1);
        state.error = "";
    },

    [deleteContactsThunk.rejected]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = action.error
    },

    [editContactsThunk.pending]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = "";
    },

    [editContactsThunk.fulfilled]: (state, action) => {
        state.status = action.meta.requestStatus;
        const index = state.data.findIndex(contact => {
            return contact.id === action.payload.id
        });
        state[index] = action.payload;
        state.error = ""
    },

    [editContactsThunk.rejected]: (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = action.error
    },
}


export default contactsReducer;