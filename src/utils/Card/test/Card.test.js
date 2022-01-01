import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";
import Card from '../Card';
// import { BrowserRouter } from "react-router-dom";
import Mybutton from "../../button";

const defaultProps = {
    grid:false,
    images:''
}

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<Card {...setupProps} /> );
}

describe('Render Card', ()=>{
    test('Render without error', ()=>{
        const wrapper = setup({grid:false, images:''});
        const component = findByTestAttr(wrapper, 'component-card');
        expect(component.length).toBe(1);
    });

    test('Not throw warning with expecting props', ()=>{
        const expectedProps = {grid:false, images:'test.jpg'};
        checkProps(Card, expectedProps);
    });

    test('Button length should be two', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-card');
        const button = component.find(Mybutton);
        expect(button).toHaveLength(2);
    });

    test('Discription should show if `grid=true`', ()=>{
        const wrapper = setup({grid:true});
        const component = findByTestAttr(wrapper, 'component-card');
        const discriptionContainer = component.find('.description');
        expect(discriptionContainer.exists()).toBe(true);

    });


});