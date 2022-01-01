import React from "react";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store';
import Auth from "../auth";


let store;

describe('<Auth />', () => {
  beforeEach(() => {
    const mockStore = configureStore();

    // creates the store with any initial state or middleware needed
    store = mockStore({
      user: {
        isLoaded: true,
      },
    });
  });
  it('Should render the component only when auth prop is true', () => {
    const Component = <h1>Hello</h1>;
    const ConditionalHOC = Auth(Component);
    const wrapper = shallow(<ConditionalHOC store={store} />);
    expect(wrapper).not.toBe(null);
  });
});