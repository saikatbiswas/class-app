import axios from "axios";
import * as actions from './index'
import { USER_SERVER, getAuthHeader, removeTokenCookie, getTokenCookie  } from "../../utils/tools";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const userLogin = (value)=> {
    return async (dispatch) =>{
        try{
            const user = await axios.post(`${USER_SERVER}signin`,{
                userid:value.email,
                password:value.password
            })

            dispatch(actions.userAuthenticate({
                data:user.data.user,
                auth:true
            }))

            dispatch(actions.successGlobal('Welcome!!'));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const registerUser = (value)=>{
    return async(dispatch) => {
        try{
            const user = await axios.post(`${USER_SERVER}register`,value);

            dispatch(actions.userAuthenticate({
                data:user.data.user,
                auth:true
            }))

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

export const userIsAuth = ()=>{
    return async(dispatch) => {
        try{

            // const site = await axios.get(`/api/site`);
            // dispatch(actions.siteGetVars(site.data))
            
            if(!getTokenCookie()){
                throw new Error();
            }

            const user = await axios.get(`${USER_SERVER}isAuth`, getAuthHeader());
            
            dispatch(actions.userAuthenticate({data:user.data, auth:true}))

        }catch(error){
            dispatch(actions.userAuthenticate({data:{}, auth:false}))
        }
    }
}

export const userSignOut = ()=>{
    return async(dispatch)=> {
        removeTokenCookie();
        dispatch(actions.userSignOut());
        // dispatch(actions.successGlobal('Good bye !'));
    }
}

