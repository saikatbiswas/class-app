import { actionType } from "../type";

export default function brandsReducer(state={}, action){
    switch(action.type){
        case actionType.GET_ALL_BRANDS:
            return { ...state, all:action.payload }
        default:
            return state
    }
}