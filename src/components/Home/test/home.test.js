import React from "react";
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { findByTestAttr, storeFactory } from "../../../../test/testUtils";
import Home from "..";
import HomePromotions from "../HomePromotions";
import CardBlock from "../../../utils/Card/CardBlock";
import { productBySort as  mocProductBySort} from "../../../store/actions/products_actions";


// Activate global mock to make sure getSecretWord dosen't make network call
jest.mock('../../../store/actions/products_actions');


const setup = (initialState = {})=>{
    const store = storeFactory(initialState)
    return mount( 
            <BrowserRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </BrowserRouter> 
        );
}

describe('Home component test', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup();

        // Clear the mock call from previous tests
        mocProductBySort.mockClear();
    });

    test('Render component without error', ()=>{
        const component = findByTestAttr(wrapper, 'home-component');
        expect(component).toHaveLength(1);
    });
    test('Home component has HomePromotions component', ()=>{
        const component = wrapper.find(HomePromotions);
        expect(component).toHaveLength(1);
    });
    test('Home component has CardBlock component', ()=>{
        const component = wrapper.find(CardBlock);
        expect(component).toHaveLength(2);
    });

    it('productBySort action call when app mount', ()=>{
        // console.log('1')
        // console.log(mocProductBySort)

        // const instance = wrapper.instance();
        // // jest.spyOn(instance, 'randomFunction');
        // instance.componentDidMount();
        wrapper = setup();
        expect(mocProductBySort).toHaveBeenCalledTimes(2);
    });

});

