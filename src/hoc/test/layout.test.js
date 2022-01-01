import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import Layout from "../layout";
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';


const setup = ()=>{
    return shallow(<Layout />);
};


describe('Layout HOC test', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = setup();
    });

    test('Render without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-layout');
        expect(component).toHaveLength(1);
    });

    test('Layout has Header component', ()=>{
        const component = wrapper.find(Header);
        // const header = component.find(Header);
        expect(component).toHaveLength(1);
    });

    test('Layout has Footer component', ()=>{
        const component = wrapper.find(Footer);
        expect(component).toHaveLength(1);
    });
    test('Layout has child component', ()=>{
        const component = findByTestAttr(wrapper, 'component-hoc');
        expect(component).toHaveLength(1);
    });

});

