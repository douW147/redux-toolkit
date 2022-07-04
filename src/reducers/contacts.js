import userSlice from "../slices/user";
import initialContactsState from "../data/contacts";

const contactsReducer = {
    add: (state, action) => {
        state.push(action.payload);
    },

    remove: (state, action) => {
        const index = state.findIndex(contact => {
            return contact.id === action.payload
        });
        state.splice(index, 1);
    },

    update: (state, action) => {
        const index = state.findIndex(contact => {
            return contact.id === action.payload.id
        });
        state[index] = action.payload
    }
};

export const contactsExtraReducer = {
    [userSlice.actions.login.type]: (state,action) => {
        return initialContactsState;
    },

    [userSlice.actions.logout.type]: (state, action) => {
        return [];
    }
}

export default contactsReducer;