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

export default contactsReducer;