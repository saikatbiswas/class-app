import * as actions from './index';
import axios from "axios";
// import { getAuthHeader } from 'utils/tools';


export const getAllCategory = ()=>{
    return async (dispatch) => {
        try{
            const allCategories = await axios.get(`/api/allcategory/all`);

            dispatch(actions.getAllCategory(allCategories.data));

        }catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}


