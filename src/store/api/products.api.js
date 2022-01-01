import axios from "axios";
import { PRODUCT_SERVER, getAuthHeader, removeTokenCookie, getTokenCookie } from "../../utils/tools";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const allProducts = (data)=>{
    return axios.get(`${PRODUCT_SERVER}all`,{
        params: data
    });

}

export const getProductByPaginate = ({args, params=""})=>{
    // console.log('args, params', args, params)
    // alert('1')
    return axios.post(`/api/products/paginate/all`, args,{
        params
    });
}


// export const userLogin = ({userid, password})=>{
//     // const userData = axios.post(`${USER_SERVER}signin`,{
//     //     userid,
//     //     password
//     // });
//     // return userData;
//     return axios.post(`${USER_SERVER}signin`,{
//         userid,
//         password
//     });
// }