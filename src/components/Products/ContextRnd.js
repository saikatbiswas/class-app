import React, { createContext } from 'react';
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
  
  const ThemeContext = createContext(themes.light);
  
  const ContextRnd = () => {
    return (
      <ThemeContext.Provider value={themes.light}>
        <Toolbar themeContext={ThemeContext} />
      </ThemeContext.Provider>
    );
  }
  
//   function Toolbar(props) {
//       console.log('toolbar', props)
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     console.log('theme', theme)
//     return (
//       <button style={{ background: theme.background, color: theme.foreground, fontSize: theme.fontSize }}>
//         I am styled by theme context!
//       </button>
//     );
//   }



export default ContextRnd;