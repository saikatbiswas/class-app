import { actionType  } from "../type";


// Notification
export const errorGlobal = (msg) => ({
    type: actionType.ERROR_GLOBAL,
    payload:msg
});
export const successGlobal = (msg) => ({
    type: actionType.SUCCESS_GLOBAL,
    payload:msg
});
export const clearNotification = (data)=> {
    return (dispatch)=>{
        dispatch({
            type: actionType.CLEAR_NOTIFICATION
        })
    }
};


// User
export const userAuthenticate = (data) =>({
    type: actionType.AUTH_USER,
    payload:data,
});
export const userLogin = (data)=>({
    type: actionType.USER_LOGIN,
    payload:data
})

export const registerUser = (data) => ({
    type: actionType.REGISTER_USER,
    payload:data
});
// Signout
export const userSignOut = () =>({
    type: actionType.USER_SIGN_OUT
});

// Products
export const productsBySold = (data)=> ({
    type: actionType.GET_PROD_BY_SOLD,
    payload:data
});
export const productsByDate = (data)=> ({
    type: actionType.GET_PROD_BY_DATE,
    payload:data
});

export const productByPaginate = (data) => ({
    type: actionType.GET_PROD_BY_PAGINATE,
    payload: data
});

export const productFilter = (filter) => ({
    type: actionType.PRODUCT_FILTER,
    payload:filter
});


// Brand
export const getAllBrands = (data) => ({
    type: actionType.GET_ALL_BRANDS,
    payload: data
});

// Category
export const getAllCategory = (data) => ({
    type: actionType.GET_ALL_CATEGORY,
    payload: data
});