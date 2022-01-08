import React, { Component, createContext } from 'react';
import Toolbar from './Toolbar';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
      fontSize:'24px'
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
      fontSize:'30px'
    }
  };
  
  export const ThemeContext = createContext(themes.light);

  class ContextRnd extends Component{
    render() {
      return (
        <ThemeContext.Provider value={themes.light}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
  }
  
  // const ContextRnd = () => {
  //   return (
  //     <ThemeContext.Provider value={themes.light}>
  //       <Toolbar themeContext={ThemeContext} />
  //     </ThemeContext.Provider>
  //   );
  // }
  

export default ContextRnd;