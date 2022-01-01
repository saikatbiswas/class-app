import { actionType } from "../type";

export default function categoryReducer(state={}, action){
    switch(action.type){
        case actionType.GET_ALL_CATEGORY :
            return { ...state, all:action.payload}
        default:
            return state;
    }
}