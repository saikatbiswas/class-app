// SERVER ROUTE
import cookie from 'react-cookies';

export const USER_SERVER = '/api/auth/';
export const PRODUCT_SERVER = '/api/products/';
export const BRAND_SERVER = '/api/brands/';


// Render image
export const renderCardImage = (images) =>{
    let img;
    if(images && images.length > 0){
        img =  images[0];
    }else{
        img = './images/image_not_availble.png'
    }
    return img;
}

// FIlter unique array





// Cookie
export const getTokenCookie = ()=> cookie.load('x-access-token');
export const removeTokenCookie = ()=> cookie.remove('x-access-token', {path:'/'});
export const getAuthHeader = ()=>{
    return { headers: {'Authorization': `Bearer ${getTokenCookie()}` }}
}