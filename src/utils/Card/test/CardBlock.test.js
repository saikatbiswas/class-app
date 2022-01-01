import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";
import CardBlock from "../CardBlock";

const defaultProps = {
    title:''
}

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<CardBlock {...setupProps} />);
}

describe('Card block rander', ()=>{
    test('Render card block without error', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-card-block');
        expect(component).toHaveLength(1);
    });

    test('No error throw if props is declared', ()=>{
        checkProps(CardBlock, {title:'Test'})
    });
})
