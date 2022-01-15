// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// jest-canvas-mock use for canvas error  
//Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)
import 'jest-canvas-mock';

import Enzyme from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });


window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
