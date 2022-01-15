import React, { Component } from "react";
// import { ThemeContext } from './ContextRnd';
import { MainContext } from "./MainContext";

class ThemeButton extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // static contextType = ThemeContext;

  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = { 
      counter: 0
  };
    this.handleClick = this.handleClick.bind(this);
    this.handleContext = this.handleContext.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  handleContext(){
    const context = this.context;
    const newTheme = {
      foreground: "#Fff0f5",
      background: "#6f2da8",
      fontSize:'24px'
    }

    //Call our setTheme method that we declared in ContextRnd Component.
    context.setTheme(newTheme);
  }

  render() {
    // console.log('sdfsdf',this.context);
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
      <div className="context-button2" data-test="context-button">
        <button style={{ background: this.context.background, color: this.context.foreground, fontSize: this.context.fontSize }} onClick={this.handleContext}>
          I am styled by theme context!
        </button>
        <button onClick={this.handleClick} >
          Error Boundary {this.state.counter}
        </button>
      </div>
    )
  }
}



// import React, {useContext} from 'react';

// const ThemedButton = (props) => {
//     // const theme = useContext();
//     // console.log('theme', theme)
//     return (
//         <div>hfghfg</div>
//       // <button style={{ background: theme.background, color: theme.foreground, fontSize: theme.fontSize }}>
//       //   I am styled by theme context!
//       // </button>
//     );
// };

export default ThemeButton; 