import { actionType  } from "../type";

export const productsBySort = (data)=> ({
    type: actionType.GET_PROD_BY_SORT,
    payload:data
});

export const productsBySold = (data)=> ({
    type: actionType.GET_PROD_BY_SOLD,
    payload:data
});

export const productsByDate = (data)=> ({
    type: actionType.GET_PROD_BY_DATE,
    payload:data
});

export const productByPaginate = (data) => ({
    type: actionType.PROD_BY_PAGINATE,
    payload: data
});
export const getProductByPaginate = (data) => ({
    type: actionType.GET_PROD_BY_PAGINATE,
    payload: data
});

export const productFilter = (filter) => ({
    type: actionType.PRODUCT_FILTER,
    payload:filter
});