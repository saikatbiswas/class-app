import axios from "axios";
import { USER_SERVER, getAuthHeader, removeTokenCookie, getTokenCookie } from "../../utils/tools";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const userLogin = ({userid, password})=>{
    const userData = axios.post(`${USER_SERVER}signin`,{
        userid,
        password
    });
    return userData;
    // return axios.post(`${USER_SERVER}signin`,{
    //     userid,
    //     password
    // });
    // const userData = axios.post(`https://concertium.captainschair-dev.app/api/v1/login`,{
    //     email:userid,
    //     password
    // });
    // return userData;
}

export const isAuth = ()=>{
    // console.log(getTokenCookie());
    // if(getTokenCookie()){
        
    // }

    return axios.get(`${USER_SERVER}isAuth`, getAuthHeader());
}

export const isAuthRedirections = (props)=>{
    console.log('api props',props)
}

export const createAgGrid = ()=>{
    const data = axios.get(`https://www.ag-grid.com/example-assets/olympic-winners.json`);
    return data;
}