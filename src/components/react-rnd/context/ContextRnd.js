import React, { Component, createContext } from 'react';
import { MainContext } from './MainContext';
import ToolbarComponent from './ToolbarComponent';

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee",
//       fontSize:'24px'
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222",
//       fontSize:'30px'
//     }
//   };
  
//   export const ThemeContext = createContext(themes.light);

  class ContextRnd extends Component{

    constructor(props){
      super(props);

      this.state = {
        foreground: "#ffffff",
        background: "#222222",
        fontSize:'30px',
        setTheme: this.setTheme,
      }
    }

    setTheme = (theme) => {
      this.setState(theme );
    };

    render() {
      return (
        <MainContext.Provider value={this.state}>
          <ToolbarComponent />
        </MainContext.Provider>
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