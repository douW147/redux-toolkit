const userReducer = {
    login: (state, action) => {
        state.isLoggedIn = true;
        state.userName = action.payload
    },

    logout: (state, action) => {
        state.isLoggedIn = false;
        state.userName = null
    }
}

export default userReducer;