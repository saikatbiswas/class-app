import { takeLatest, takeEvery, take, fork, call, put } from "redux-saga/effects";
import * as actions from "../actions/products.actions";
import { actionType } from "../type";
import * as api from "../api/products.api";


function* productBySort(action){
    const {limit, sortBy, order, where} = action.payload;
    try{
        const products = yield call(api.allProducts, {limit, sortBy, order});
        switch(where){
            case 'bySold':
                yield put(actions.productsBySold(products.data));
            break;

            case 'byDate':
                yield put(actions.productsByDate(products.data));
            break;

            default:
                return false
        }

    }catch(error){

    }

}

function* watchProductsBySort(){
    
    yield takeEvery( actionType.GET_PROD_BY_SORT, productBySort)
}

function* productByPaginate(action){
    const {args, params} = action.payload;
    try{
        const products = yield call(api.getProductByPaginate, {args, params});
        // console.log('products', products)
        yield put(actions.getProductByPaginate(products.data))
        
    }catch(error){

    }
}

function* watchProductByPaginate(){
    yield takeEvery( actionType.PROD_BY_PAGINATE, productByPaginate)
}

function* productFilter(action){
    // yield console.log(action);
    yield call(productByPaginate, action)

}

function* watchProductFilter(){
    yield takeLatest( actionType.PRODUCT_FILTER, productFilter )
}


const productsSaga = [
    fork(watchProductsBySort),
    fork(watchProductByPaginate),
    fork(watchProductFilter)
];

export default productsSaga;