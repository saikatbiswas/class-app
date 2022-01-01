import React, { Component } from 'react';
import CardProductBlock from '../../utils/Card/CardProductBlock';

class ProductList extends Component {

    // constructor(props){
    //     super(props);

    // }

    render() {
        // console.log('list',this.props)
        return (
            <div>
                <div>
                    <CardProductBlock 
                        grid={this.props.grid}
                        list={this.props.products}
                    />
                </div>
            </div>
        );
    }
}

export default ProductList;