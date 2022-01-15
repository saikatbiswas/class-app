
import { actionType } from "../type";
let DEFAULT_USER_STATE = {
    data:{
        _id:null,
        fullname:null,
        email:null,
        phone:null,
        historyuser:[],
        historyseller:[],
        issocalregister:null,
        verified:null
    },
    auth:null,
    cart:[],
    sell:[]
}

export default function usersReducer(state=DEFAULT_USER_STATE, action){
    switch(action.type){
        case actionType.AUTH_USER:
            return{
                ...state,
                data:{...action.payload.data},
                auth:action.payload.auth
            }
        case actionType.USER_SIGN_OUT:
            return{
                ...state,
                data:{...DEFAULT_USER_STATE},
                auth:false
            }
        case actionType.AG_GRID_DATA:
            return {
                ...state,
                grid: action.payload.data
            }
        default:
            return state
    }

}
