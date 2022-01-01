import React, {useContext} from 'react';

const ThemedButton = (props) => {
    const theme = useContext(props.context);
    console.log('theme', theme)
    return (
        // <div>hfghfg</div>
      <button style={{ background: theme.background, color: theme.foreground, fontSize: theme.fontSize }}>
        I am styled by theme context!
      </button>
    );
};

export default ThemedButton; 