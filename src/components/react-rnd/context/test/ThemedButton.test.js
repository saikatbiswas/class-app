import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ThemedButton from "../ThemedButton";
import { findByTestAttr } from "../../../../../test/testUtils"; 


const setup = ()=>{
    return shallow(<ThemedButton />);
}

test('Render card block without error', ()=>{
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'context-button');
    // expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
});