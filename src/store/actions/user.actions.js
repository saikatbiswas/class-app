import { actionType } from "../type";

export const getUserLogin = (data) =>({
    type:actionType.USER_LOGIN,
    payload: data
});

export const userIsAuth = () =>({
    type: actionType.AUTH_IS_USER
});

export const userAuthenticate = (data) =>({
    type: actionType.AUTH_USER,
    payload:data,
});

export const userSignOut = () =>({
    type: actionType.USER_SIGN_OUT
});

export const createAgGrid = ()=>({
    type: actionType.CREATE_AG_GRID
});
export const agGridData = (data)=>({
    type: actionType.AG_GRID_DATA,
    payload: data
});