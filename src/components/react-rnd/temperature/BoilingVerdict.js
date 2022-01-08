import React from 'react';

const BoilingVerdict = (props) => {
    return (
        <div>
            {props.celsius >= 100?
                <p>The water would boil.</p>
            :
                <p>The water would not boil.</p>
            }
        </div>
    );
};

export default BoilingVerdict;