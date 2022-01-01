import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotions from "./HomePromotions";
import CardBlock from "../../utils/Card/CardBlock";

import { connect } from "react-redux";
import { productsBySort } from '../../store/actions/products.actions';



class Home extends Component {

    // constructor(props){
    //     super(props);
    
    //     //When render this component `getUserRequest()` will be fire
    //     this.props.productsBySort({limit:4, sortBy:'itemsold', order:'desc', where:'bySold'});

    //     this.props.productsBySort({limit:4, sortBy:'itemsold', order:'desc', where:'byDate'});
    //   }

    componentDidMount(){
        this.props.productsBySort({limit:4, sortBy:'itemsold', order:'desc', where:'bySold'});

        this.props.productsBySort({limit:4, sortBy:'itemdate', order:'desc', where:'byDate'});
    //     this.props.dispatch(productBySort({
    //         limit:4, sortBy:'itemsold', order:'desc', where:'bySold'
    //     }));

    //     this.props.dispatch(productBySort({
    //         limit:4, sortBy:'itemdate', order:'desc', where:'byDate'
    //     }));
    }

    render(){
        return(
            <div  data-test="home-component" >
                <HomeSlider />
                <CardBlock 
                    list={this.props.products.bySold}
                    title="Best selling guitars"
                />
                <HomePromotions />
                <CardBlock 
                    list={this.props.products.byDate}
                    title="New Arrivels"
                />
            </div>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return{
//         products:state.products
//     }
// }

// export default connect(mapStateToProps)(Home);
export default connect(({products}) => ({products}), {
    // this is map dispatch to props
    productsBySort
  })(Home);