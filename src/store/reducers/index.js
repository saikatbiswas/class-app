import { combineReducers } from 'redux';
import user from './user_reducer';
import notification from './notification_reducer';
import products from './products_reducer';
import brands from './brands_reducer';
import category from './category_reducer';

const appReducers = combineReducers({
    user,
    notification,
    products,
    brands,
    category
});


export default appReducers;