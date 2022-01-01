import { actionType } from "../type";


export default function notification(state={}, action){
    switch(action.type){
        case actionType.ERROR_GLOBAL:
            return {...state, error: true, msg: action.payload}
        case actionType.SUCCESS_GLOBAL:
            return {...state, success: true, msg: action.payload}
        case actionType.CLEAR_NOTIFICATION:
            return {}

        default:
            return state;
    }
}