import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from "../../../../test/testUtils";
import Login from "../Login";
import { userLogin as mocUserLogin } from "../../../store/actions/user_actions";


// Activate global mock to make sure getSecretWord dosen't make network call
jest.mock("../../../store/actions/user_actions");

const setup = (initialState={})=>{
    const store = storeFactory(initialState);
    return mount(
        <BrowserRouter>
            <Provider store={store}>
                <Login />
            </Provider>
        </BrowserRouter>
    );
}

test('Rander without error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'signup-wrapper-component');
    expect(component.length).toBe(1);
});

// describe('Click Submit button', ()=>{
//     // let wrapper;
//     beforeEach(()=>{
//         // wrapper = setup({
//         //     formData:{
//         //         email:{
//         //             valid:true,
//         //         },
//         //         password:{
//         //             valid:true,
//         //         }
//         //     }
//         // });
//         // Clear the mock call from previous tests
//         mocUserLogin.mockClear();
//     });

//     test('If form is validate userLogin() function trigger', ()=>{
//         // const submitMock = jest.fn()
//         // const component = findByTestAttr(wrapper, 'signup-wrapper-component');
//         const wrapper = setup({
//             formData:{
//                 email:{
//                     valid:true,
//                     value:'Test'
//                 },
//                 password:{
//                     valid:true,
//                     value:'Test'
//                 }
//             }
//         });
//         const submitButton = findByTestAttr(wrapper, 'login-submit-component');
//         const component = findByTestAttr(wrapper, 'signup-wrapper-component');
//         const errorComp = component.find('.error_label');
//         // console.log(submitButton);
//         submitButton.simulate('click');
//         expect(errorComp.length).toBe(1);
//         // expect(mocUserLogin).toHaveBeenCalledTimes(1);
//     });
// });

