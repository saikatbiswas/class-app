import { takeLatest, takeEvery, take, fork, call, put } from "redux-saga/effects";
import * as actions from "../actions/user.actions";
import { actionType } from "../type";
import * as api from "../api/user.api";
import {removeTokenCookie, getTokenCookie } from "../../utils/tools";

function* userLogin(action){
    try{
        const userData = yield call(api.userLogin, {
            userid:action.payload.email,
            password:action.payload.password
        });

        alert('userData');
        console.log('userData',userData);

        yield put(actions.userAuthenticate({
            data:userData.data.user,
            auth:true
        }));


    }catch(error){

    }
}

function* watchUserLogin(){
    yield takeLatest( actionType.USER_LOGIN, userLogin );
}

function* userIsauth(){
    // yield alert(1);
    yield call(userAuthenticate);
    
    // yield call(api.isAuthRedirections(action.payload))
}

function* watchUserIsAuth(){
    yield take(actionType.AUTH_IS_USER);
    yield call(userIsauth)
}
function* userAuthenticate(){
    if(!getTokenCookie()){
        // throw new Error();
        return false;
    }

    const userData = yield call(api.isAuth);

    

    yield put(actions.userAuthenticate({
        data:userData.data,
        auth:true
    }))
    console.log('userData', userData)
}

function* watchUserAuthenticate(){
    yield take(actionType.AUTH_USER, userAuthenticate);
}

function* userSignOut(){
    yield removeTokenCookie();
    yield call(actions.userSignOut());
}

function* watchUserSignOut () {
    yield take(actionType.USER_SIGN_OUT, userSignOut);
}


const userSagas = [
    fork(watchUserLogin),
    fork(watchUserAuthenticate),
    fork(watchUserIsAuth),
    fork(watchUserSignOut)
];

export default userSagas;