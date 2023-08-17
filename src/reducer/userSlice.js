import {createSlice} from '@reduxjs/toolkit';
import { UserPizza } from '../data/UserPizza';
import { ListeUtils } from '../utils/ListeUtils';


const listeUtils = new ListeUtils();

const initialState = {
        userConnecte : '',
        allInfosUser : '',
        role : '',
        isLogIn : false,
        orderSort: 'asc',
        colName: 'name',
        listeUserActu : listeUtils.orderList(new UserPizza().listeUser, 'name', 'asc'),
        messageUserAdd : ''
};



export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateUserConnecte:(state, action) => {
            state.userConnecte = action.payload
            state.allInfosUser = state.listeUserActu.filter((x) => x.name === state.userConnecte).at(0)
            state.isLogIn = true
        },
        updateUserRoleConnecte:(state, action) => {
            state.role = action.payload
        },
        deconnecteUser:(state, action) => {
            state.userConnecte = null
            state.isLogIn = false
        },
        addUser:(state, action) => {
            if(state.listeUserActu.filter(x => x.name === action.payload.name).length === 0){
                state.listeUserActu = listeUtils.orderList([...state.listeUserActu,action.payload], state.colName, state.orderSort)
                state.messageUserAdd= "User avec le nom " + action.payload.name + " ajouté"
            } else {
                state.messageUserAdd= "Un user avec le nom " + action.payload.name + " existe déjà"
            }
        },
        sortListUser:(state, action) => {
            state.colName = action.payload.colName
            state.orderSort = state.orderSort === 'asc' ? 'dsc' : 'asc'
            state.listeUserActu = listeUtils.orderList([...state.listeUserActu], action.payload.colName, state.orderSort)
        }
    },
});

export const {updateUserConnecte, deconnecteUser, updateUserRoleConnecte, addUser, sortListUser} = userSlice.actions;

export const currentUser = (state) => state.users.userConnecte;
export const allInfosUser = (state) => state.users.allInfosUser;
export const isLoginUser = (state) => state.users.isLogIn;
export const roleUser = (state) => state.users.role;
export const listeUsers = (state) => state.users.listeUserActu;
export const orderListeUsers = (state) => state.users.orderSort;
export const colActif = (state) => state.users.colName;
export const messageUserAdd = (state) => state.users.messageUserAdd;

export default userSlice.reducer;