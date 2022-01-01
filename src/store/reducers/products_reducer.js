import { actionType } from "../type";

let DEFAULT_VALUE = {
    filter:{
        keywords:'',
        brand:[],
        mainCategory:[], 
        subCategory:[], 
        category:[], 
        min:0,
        max:100000,
        fabric:[],
        color:[], 
        page:1
    },
    fabric:[],
    color:[]
}

export default function productsReducer(state=DEFAULT_VALUE, action){
    switch(action.type){
        
        case actionType.GET_PROD_BY_SOLD:
        return { ...state, bySold:action.payload };

        case actionType.GET_PROD_BY_DATE:
        return { ...state, byDate:action.payload };

        case actionType.GET_PROD_BY_PAGINATE:
            return { ...state, all:action.payload }
        
        case actionType.PRODUCT_FILTER:
            return{
                ...state,
                filter:{...state.filter, ...action.payload}
            }
        
        default:
            return state;

    }
}