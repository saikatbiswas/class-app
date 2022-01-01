import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Mybutton from "../button";

const defaultProps = {
    type:'default',
    altClass:'',
    addStyles:{},
    linkTo:'',
    title:'',
}

const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<Mybutton {...setupProps} />)
}

test('Button does not not show if type not declare', ()=>{
    const wrapper = setup({type:''});
    const component = findByTestAttr(wrapper, 'button-component');
    expect(component.text()).toBe("");
});

test('Button show if type declared', ()=>{
    const wrapper = setup({type:'default'});
    const component = findByTestAttr(wrapper, 'button-component');
    expect(component.text()).not.toBe("");
});
test('Not throw warning with expecting props', ()=>{
    const expectedProps = {...defaultProps, addToCart:()=>{} };
    checkProps(Mybutton, expectedProps);
});
test('call `addToCart` function if type is `icon_button`', ()=>{
    const addToCartMock = jest.fn();
    const wrapper = setup({type:'icon_button', addToCart:addToCartMock});
    const cartButton = findByTestAttr(wrapper, 'component-cart-button');
    cartButton.simulate('click');
    expect(addToCartMock.mock.calls.length).toBe(1);
});