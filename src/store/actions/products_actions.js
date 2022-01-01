import axios from "axios";
import * as actions from './index'
import { PRODUCT_SERVER, getAuthHeader  } from "../../utils/tools";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const productBySort = ({limit, sortBy, order, where})=>{
    return async (dispatch)=>{
        try{
            const products = await axios.get(`${PRODUCT_SERVER}all`,{
                params:{
                    limit, sortBy, order
                }
            });
            switch(where){
                case 'bySold':
                dispatch(actions.productsBySold(products.data));
                break;

                case 'byDate':
                    dispatch(actions.productsByDate(products.data));
                break;

                default:
                    return false
            }

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

// export const productByPaginate = (args, params)=>{
//     return async(dispatch)=>{
//         try{
//             const products = await axios.post(`/api/products/paginate/all`, args,{
//                 params:params
//             });
            
//             dispatch(actions.productByPaginate(products.data));
//         }catch(error){
//             dispatch(actions.errorGlobal(error.response.data.message));
//         }
//     }

// }
export const productByPaginate = (args='', params='')=>{
    console.log(args, params)
    return async(dispatch)=>{
        try{
            const products = await axios.post(`/api/products/paginate/all`, args,{
                params:params
            });
            console.log(products)
            dispatch(actions.productByPaginate(products.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}

