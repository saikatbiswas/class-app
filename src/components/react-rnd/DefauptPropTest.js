import React, { Component } from 'react';

class DefauptPropTest extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: 'red'
        } 
    }
    

    render() {
        return (
            <div style={{ color: this.props.color}}>
                Test Default props
            </div>
        );
    }
}

DefauptPropTest.defaultProps = {
    color: 'blue'
};

export default DefauptPropTest;