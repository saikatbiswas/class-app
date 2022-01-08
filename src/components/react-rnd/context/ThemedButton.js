import React, { Component } from "react";
import { ThemeContext } from './ContextRnd';

class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    console.log('sdfsdf',this.context);
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
      // <button style={{ background: this.context.background, color: this.context.foreground, fontSize: this.context.fontSize }}>
      //   I am styled by theme context!
      // </button>
      <button onClick={this.handleClick}>
        I am styled by theme context! {this.state.counter}
      </button>
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

export default ThemedButton; 