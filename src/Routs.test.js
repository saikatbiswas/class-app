import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Routes from "./Routes";
// import Auth from "./hoc/auth"
// import Home from "./components/Home";

const setup = ()=>{
    return shallow(<Routes />)
}

test('Render without error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'routes-component');
    expect(component.length).toBe(1);
});

// test('renders correct routes', () => {
//     const wrapper = setup();
//     // const component = findByTestAttr(wrapper, 'routes-component').reduce((pathMap, route) => {
//     //     const routeProps = route.props();
//     //     pathMap[routeProps.path] = routeProps.component;
//     //     return component;
//     //   }, {});
//     // const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     //     console.log(pathMap);
//     //     console.log(route);
//     //   const routeProps = route.props();
//     //   console.log(routeProps)
//     //   pathMap[routeProps.path] = routeProps.component;
//     //   return pathMap;
//     // }, {});
    
//     // const mock = jest.fn();
//     // // { 'nurse/authorization' : NurseAuthorization, ... }
  
//     // expect(pathMap['/']).toBe(Auth(Home));
//   });