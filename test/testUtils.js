import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import appReducers from '../src/store/reducers';
import thunk from "redux-thunk";

export const storeFactory = (initialState) => {
    return createStore(appReducers, initialState, applyMiddleware(thunk));
}
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper 
 * @param {String} val - Value of data-test attribute for search 
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps)=>{
    const propsError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propsError).toBeUndefined();
}
