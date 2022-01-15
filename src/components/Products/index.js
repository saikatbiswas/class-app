import React, { Component, createRef } from "react";
import PageTopHeading from "../../utils/pageTopHeading";

import { connect } from 'react-redux';
import { getAllBrands } from "../../store/actions/brands_action";
import { getAllCategory } from "../../store/actions/category_action";
import { productByPaginate, productFilter } from "../../store/actions/products.actions";
// import { productFilter } from "../../store/actions";
import CollapsableCheckbox from "../../utils/CollapsableCheckbox";
import CollapsableRadio from "../../utils/CollapsableRadio";

import ProductList from "./ProductList";

import { Chart,
    Legend,
    Tooltip,
    ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import ReactToPdf from 'react-to-pdf';

Chart.register(
    Legend,
    Tooltip,
    ArcElement);
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const optionsChart = {
    plugins: {
        title: {
            display: true,
            text: 'Chart Title'
        },
        legend:{
            display:true,
            position: 'bottom'
        },
        tooltip: {
            callbacks: {
                label: (context) => {
                let label = "";
                if (context.parsed) {
                    label = context.parsed + "%"
                }
                return label;
                }
            }
            }
    },
    scales: {
        x: {
            type: 'linear'
        },
        y: {
            type: 'linear'
        }
    }

}
  

class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            grid:false,
            limit:6,
            skip:0,
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
        
        this.props.dispatch(getAllBrands());
        this.props.dispatch(getAllCategory());
        // this.props.dispatch(productFilter({args:this.state.filters}));

        this.props.dispatch(productByPaginate(this.props.filter));

        // this.props.dispatch(productByPaginate({args:this.props.filter, param:'abc'}));
        console.log(this.props);
        
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.filter !== prevProps.filter){
    //         // this.props.dispatch(productByPaginate({args:this.props.filter}));
    //     }


    //     // this.props.dispatch(productByPaginate(this.props.filter));
    // }

    handleFilter = (filters, category)=>{
        // console.log(filters, category)
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        this.setState({
            filters: newFilters
        },()=>{
            this.props.dispatch(productFilter({args:newFilters}));
        });

    }

    handleRange = (values) => {
        // console.log(values)
        // dispatch(productFilter({ min:values[0],max:values[1], page:1 }))
        const newFilters = {...this.state.filters}
        if(newFilters.min === 0){
            newFilters.min = values[0]
        }else{
            newFilters.min = values[0] - 1
        }
        if(values[1] === 10000){
            newFilters.max = 99999
        }else{
            newFilters.max = values[1] - 1
        }
        
        this.setState({
            filters: newFilters
        },()=>{
            this.props.dispatch(productFilter({args:newFilters}));
        });
    }

    handleFilters = (filters,category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;
 
         if(category === "price"){
             let priceValues = this.handlePrice(filters);
             newFilters[category] = priceValues
         }
 
        this.setState({
            filters: newFilters
        })
     }


    render(){

        const ref = createRef();

        // console.log(this.state)
        const products = this.props.products;
        const brands = this.props.brands.all;
        const category = this.props.category;

        let newCategory;
        if(category.all){
            newCategory = category.all.filter((item)=>{
                return item.subcategory === null
            });
        }
        let newFabric;
        let newColor;
        if(products.all && products.all.docs){

            // newFabric = [...new Set(products.all.docs.map(item => item.fabric))]
            // const chartD = products.all.docs.forEach((item, i) =>{
            //     return item.itemsold;
            // });
            // this.setState({
            //     chartData:chartD
            // });

            newFabric = products.all.docs.filter((item, i)=>{
                const _item = JSON.stringify(item.fabric);
                return i === products.all.docs.findIndex(obj => {
                    return JSON.stringify(obj.fabric) === _item;
                });
            });

            // this.setState({
            //     fabric: newFabric
            // });

            newColor = products.all.docs.filter((item, i)=>{
                const _item = JSON.stringify(item.color);
                return i === products.all.docs.findIndex(obj => {
                    return JSON.stringify(obj.color) === _item;
                });
            });

            


        }
        

        // console.log('newFabric', newFabric)
        return(
            <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf"  options={{unit: 'in'}} scale={0.6}>
                    {({toPdf}) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div ref={ref}>
                <PageTopHeading 
                    title="Products"
                />
                <div style={{width: '300px'}}>
                    <Doughnut data={data} options={optionsChart} />
                </div>
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapsableCheckbox 
                                initState={true}
                                title="Brands"
                                list={brands}
                                handleFilter={(filter)=> this.handleFilter(filter, 'brand')}
                            />

                            <CollapsableCheckbox 
                                initState={false}
                                title="Category"
                                list={newCategory}
                                handleFilter={(filter)=> this.handleFilter(filter, 'subCategory')}
                            />

                            <CollapsableCheckbox 
                                initState={false}
                                title="Fabric"
                                list={newFabric}
                                handleFilter={(filter)=> this.handleFilter(filter, 'fabric')}
                            />

                            <CollapsableCheckbox 
                                initState={false}
                                title="Color"
                                list={newColor}
                                handleFilter={(filter)=> this.handleFilter(filter, 'color')}
                            />
                            <CollapsableRadio
                                initState={true}
                                title="Price range"
                                handleRange={(value)=> this.handleRange(value)}
                            />



                        </div>
                        <div className="right">
                            <div className="shop_options">
                                <div className="shop_girds clear">
                                </div>
                            </div>
                            <div>
                                {products.all && products.all.docs?
                                    <ProductList 
                                        grid={this.state.grid}
                                        limit={this.state.limit}
                                        products={products.all.docs}
                                    />
                                :
                                    null
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products,
        filter: state.products.filter,
        brands: state.brands,
        category: state.category
    }
}

// export default connect(({products}) => ({products}), {
//     // this is map dispatch to props
//     productByPaginate
//   })(Product);
export default connect(mapStateToProps) (Product);