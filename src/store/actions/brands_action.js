import axios from "axios";
import * as actions from './index'
import { BRAND_SERVER} from "../../utils/tools";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const getAllBrands  = ()=>{
    return async(dispatch)=>{
        try{
            const brands = await axios.get(`${BRAND_SERVER}all`);

            // console.log(brands)

            dispatch(actions.getAllBrands(brands.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message));
        }
    }
}