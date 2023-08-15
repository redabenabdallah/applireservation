import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        userConnecte : '',
        role : '',
        isLogIn : false
};
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateUserConnecte:(state, action) => {
            state.userConnecte = action.payload
            state.isLogIn = true
        },
        updateUserRoleConnecte:(state, action) => {
            state.role = action.payload
        },
        deconnecteUser:(state, action) => {
            state.userConnecte = null
            state.isLogIn = false
        }
    },
});

export const {updateUserConnecte, deconnecteUser, updateUserRoleConnecte} = userSlice.actions;

export const currentUser = (state) => state.users.userConnecte;
export const isLoginUser = (state) => state.users.isLogIn;
export const roleUser = (state) => state.users.role;

export default userSlice.reducer;