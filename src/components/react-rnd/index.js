import React, { Component, lazy, Profiler, Suspense } from 'react';
import { connect } from 'react-redux';
import { productByPaginate, productFilter } from "../../store/actions/products.actions";

import DefauptPropTest from './DefauptPropTest';
import Stopwatch from './StopWatch';
import ContextRnd from "./context/ContextRnd";
import ErrorBoundary from '../../hoc/ErrorBoundary';
import withSearch from '../../hoc/hoctest/withSearch'
import ProductsListHoc from '../../hoc/hoctest/ProductsList';
import MouseTracker from './temperature/renderprops/MouseTracker';

// const Calculator = lazy(()=> import('./temperature/Calculator'));
const Calculator = lazy(() => import('./temperature/Calculator'));
const AgGridComponent = lazy(() => import('./ag-grid'));
// import Calculator from './temperature/Calculator';


const ProductsListWithSearch = withSearch(ProductsListHoc);

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

        this.onRenderCallback = this.onRenderCallback.bind(this);
        
    }

    componentDidMount(){
        this.props.productByPaginate(this.props.filter);

    }

    onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        // Aggregate or log render timings...
        // console.log(
        //     id,
        //     phase,
        //     actualDuration,
        //     baseDuration, //time taken by react
        //     startTime, //time at which render starts
        //     commitTime,
        //     interactions, // this is gotten from the rapping API
        //   );
      }


    render() {
        return (
            <div>
                <DefauptPropTest color={undefined}/>
                <>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AgGridComponent />
                    </Suspense>
                </> 
                <div>
                    <ErrorBoundary>
                        <ContextRnd />
                    </ErrorBoundary>
                </div>
                
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
                        <Profiler id="productList" onRender={this.onRenderCallback}>
                            <ProductsListWithSearch />
                        </Profiler>
                    </ErrorBoundary>
                </div>
                <div>
                    <ErrorBoundary>
                        <MouseTracker />
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