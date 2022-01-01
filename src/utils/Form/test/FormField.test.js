import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../test/testUtils";
import FormField from "../FormField";

const defaultProps = {
    formdata:{}, 
    change:()=>{},
    id:''
}

const setup = (props={})=>{
    const setupProps = { ...defaultProps, ...props }
    return shallow( <FormField {...setupProps} /> );
}

describe('FormField render', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup();
    });

    test('Render without error', ()=>{
        const component = findByTestAttr(wrapper, 'formBlock-wrap-component');
        expect(component.length).toBe(1);
    });

    test('Not throw warning with expecting props', ()=>{
        checkProps(FormField, defaultProps)
    });

    // test('Error message show if touch on input', ()=>{
    //     const inputBox = findByTestAttr(wrapper, 'input-component');
    //     console.log(inputBox)
    //     const mockInputEvent = { target: { value:'' } };
    //     inputBox.simulate("change", mockInputEvent);

    //     const errorLabel = findByTestAttr(wrapper, 'error_label_component');
    //     expect(errorLabel.exists()).toBe(true);
    // });


});






