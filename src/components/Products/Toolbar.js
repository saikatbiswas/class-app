import React from 'react';
import ThemedButton from './ThemedButton';

const Toolbar = (props) => {
    console.log('toolbar', props)
    return (
      <div>
        <ThemedButton context={props.themeContext} />
      </div>
    );
};

export default Toolbar;