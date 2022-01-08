import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { productByPaginate, productFilter } from "../../store/actions/products.actions";

import DefauptPropTest from './DefauptPropTest';
import Stopwatch from './StopWatch';
import ContextRnd from "./context/ContextRnd";
import ErrorBoundary from '../../hoc/ErrorBoundary';

// const Calculator = lazy(()=> import('./temperature/Calculator'));
const Calculator = lazy(() => import('./temperature/Calculator'));
// import Calculator from './temperature/Calculator';




class ReactRnd extends Component {

    constructor(props){
        super(props);

        this.state = {
            grid:false,
            limit:6,
            skip:0,
            name:'',
            Phone:'',
            email:'',
            filters:{
                brand:[], 
                min:0,
                max:10000,
                fabric:[],
                color:[], 
                page:1, 
                subCategory:[]
            },
            chartData:[],
        }
        
    }

    componentDidMount(){
        this.props.productByPaginate(this.props.filter);

    }


    render() {
        return (
            <div>
                <DefauptPropTest color={undefined}/>
                <div>
                    <ErrorBoundary>
                        <Stopwatch />
                    </ErrorBoundary>
                </div>
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ErrorBoundary>
                            <Calculator />
                        </ErrorBoundary>
                    </Suspense>
                </div>

                <div>
                    <ErrorBoundary>
                        <ContextRnd />
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        products: state.products,
        filter: state.products.filter,
    }
}

// export default connect(({products, filter}) => ({products, filter}), {
//     // this is map dispatch to props
//     productByPaginate,
//     productFilter
//   })(ReactRnd);

export default connect(mapStateToProps, { productByPaginate, productFilter })(ReactRnd);