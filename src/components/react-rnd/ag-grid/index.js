import React, { Component } from "react";
import { connect } from "react-redux";

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { createAgGrid } from "../../../store/actions/user.actions";

import MyStatusPanel from './MyStatusPanel';
// import MyToolPanel from './MyToolPanel';

const AgeRenderer = (params)=> {
    return (
        params.value != null &&
          <span className="my-renderer">
            <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" alt="Loader" className="my-spinner" style={{width: '25px'}}/>
              {params.value}
          </span>
    );
}

class AgGridComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            rowData: null,
            defaultColDef: {
                resizable: true,
                sortable: true,
                editable: true,
                filter: true,
            },
            columnDefs:[
                { field: 'athlete', enableRowGroup: true, hide:true, chartDataType: 'category', },
                { field: 'sport', enableRowGroup: true, hide:true, chartDataType: 'category',},
                { field: 'country', enableRowGroup: true, hide:false, chartDataType: 'category',  },
                { field: 'age', cellRendererFramework: AgeRenderer, hide:false, chartDataType: 'series', },
                { field: 'gold', aggFunc: 'sum', hide:false, chartDataType: 'series', },
                { field: 'silver', aggFunc: 'sum', hide:false, chartDataType: 'series', },
                { field: 'bronze', aggFunc: 'sum', hide:true, chartDataType: 'series', },
                { field: 'total', aggFunc: 'sum', hide:false, chartDataType: 'series', }
            ],
            autoGroupColumnDef: {
                cellRendererParams: {
                    suppressCount: true,
                    checkbox: true
                },
                field: 'athlete',
                width: 300
            },
            sideBar: {
                toolPanels: [
                    'columns',
                    'filters',
                    // {
                    //     id: "myToolPanel",
                    //     labelDefault: "My Tool Panel",
                    //     labelKey: "myToolPanel",
                    //     iconKey: "filter",
                    //     toolPanelFramework: MyToolPanel
                    // }
                ],
                defaultToolPanel: "columns"
            },
            statusBar:{ 
                statusPanels: [
                    {  key: 'myStatusPanel', statusPanelFramework: MyStatusPanel }
                ] 
            },
            // gridApi:'',
            // columnApi:'',
            gridFilter:'',
            popupParent: document.body,
            chartThemeOverrides: {
              common: {
                title: {
                  enabled: true,
                  text: 'Medals by Age',
                },
                legend: { position: 'bottom' },
              },
              column: { axes: { category: { label: { rotation: 0 } } } },
            },

        }
        this.gridFilterHandler = this.gridFilterHandler.bind(this);
        this.onColumnVisible = this.onColumnVisible.bind(this);
        this.saveGrid = this.saveGrid.bind(this);
    }

    componentDidMount(){
        
        this.props.dispatch(createAgGrid());
        // if(this.props.grid && this.props.grid.length > 0){
            this.setState({
                rowData: this.props.grid
            });
        // }
        
        // `https://concertium.captainschair-dev.app/api/v1/?user_id=&msp_id=&report_id=user_report_id=&min_date=&max_date=`
        // this.$session.get("apiUrl") + "client-user-report-det?user_id="+this.$session.get("userID")+"&msp_id="+this.$session.get("msp_id")+"&report_id="+this.reportCategoryId+"&user_report_id="+this.reportListId + "&min_date=" +  this.fromDate + "&max_date=" + this.toDate;
    }
    componentDidUpdate(prevProps){
        if(this.props.grid !== prevProps.grid){
            
            this.setState({
                rowData: this.props.grid
            });
        }
        
    }

    onGridReady = (params) => {
        console.log('Grid ready',params)
        this.setState({
            gridFilter:'aus'
        });
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.gridApi.setQuickFilter(this.state.gridFilter);

        // // FIlter
        // this.gridApi.setFilterModel(this.reportFilterData);
    }

    gridFilterHandler(event){
        // console.log(event.target.value, this.state);
        this.setState({
            gridFilter:event.target.value
        });
        this.gridApi.setQuickFilter(this.state.gridFilter);
    }

    onColumnVisible(event){
        // console.log(event);
        
        // let colVisi = [];
        // let rowGroup = [];
        // let valGroup = [];
        // event.columnApi.columnModel.gridColumns.forEach(element => {
        //     // if(element.colDef.field === 'age'){
        //     //     colVisi.push({cellRendererFramework:AgeRenderer});
        //     // }

        //     colVisi.push({
        //         field:element.colDef.field,
        //         enableRowGroup:element.colDef.enableRowGroup,
        //         hide:element.visible,
        //         resizable:element.colDef.resizable,
        //         sortable:element.colDef.sortable,
        //         cellRendererFramework:AgeRenderer,
        //         pin:element.pinned || null,
        //         actualWidth:element.actualWidth || null,
        //         sort:element.sort || null,
        //     })
        //     // return element.colDef
        // });
        // //Row Group
        // event.columnApi.columnModel.rowGroupColumns.forEach(element =>{
        //     rowGroup.push({id:element.colId})
        // });

        // //Value Group
        // event.columnApi.columnModel.valueColumns.forEach((element, index) =>{
        //     valGroup.push({
        //         id:element.colId,
        //         function:element.aggFunc
        //     })
        // });
        
        // console.log(colVisi, rowGroup, valGroup)
        // this.setState({
        //     columnDefs:colVisi
        // });
    }
    onColumnResized = (param)=>{
        // console.log('p', param)

    }

    // Chart
    onFirstDataRendered = (params) => {
      var createRangeChartParams = {
        cellRange: {
          rowStartIndex: 0,
          rowEndIndex: 79,
          columns: ['age', 'gold', 'silver', 'bronze'],
        },
        chartType: 'groupedColumn',
        chartContainer: document.querySelector('#myChart'),
        aggFunc: 'sum',
      };
      params.api.createRangeChart(createRangeChartParams);
    };

    // Save
    saveGrid(){
        console.log(this);

        let colVisi = [];
        let rowGroup = [];
        let valGroup = [];
        this.gridColumnApi.columnModel.gridColumns.forEach(element => {
            // if(element.colDef.field === 'age'){
            //     colVisi.push({cellRendererFramework:AgeRenderer});
            // }

            colVisi.push({
                field:element.colDef.field,
                enableRowGroup:element.colDef.enableRowGroup,
                hide:element.visible,
                resizable:element.colDef.resizable,
                sortable:element.colDef.sortable,
                cellRendererFramework:AgeRenderer,
                pin:element.pinned || null,
                actualWidth:element.actualWidth || null,
                sort:element.sort || null,
            })
            // return element.colDef
        });
        //Row Group
        this.gridColumnApi.columnModel.rowGroupColumns.forEach(element =>{
            rowGroup.push({id:element.colId})
        });

        //Value Group
        this.gridColumnApi.columnModel.valueColumns.forEach((element, index) =>{
            valGroup.push({
                id:element.colId,
                function:element.aggFunc
            })
        });

        // this.gridColumnApi.getColumnState()
        
        // console.log(colVisi, rowGroup, valGroup)
        console.log(this.gridColumnApi.getColumnState())
    }
    


    render(){
        return(
            <div className="ag-grid-wrapper " >
                <button onClick={this.saveGrid}>Save</button>
                <input type="text" placeholder="Filter" onChange={(event)=>this.gridFilterHandler(event)} value={this.state.gridFilter} />

                <div id="myChart" className="ag-theme-alpine my-chart"></div>

                <div className="ag-theme-alpine" style={{height: 450}}>
                    {this.props.grid?
                    <AgGridReact
                        reactUi="true"

                        rowData={this.state.rowData}
                        animateRows="true"
                        // modules={modules}
                        columnDefs={this.state.columnDefs}
                        defaultColDef={this.state.defaultColDef}
                        autoGroupColumnDef={this.state.autoGroupColumnDef}
                        rowGroupPanelShow="always"
                        enableRangeSelection={true}
                        rowSelection="multiple"
                        groupSelectsChildren={true}
                        suppressRowClickSelection={true}
                        sideBar={this.state.sideBar}
                        statusBar={this.state.statusBar}

                        onGridReady={this.onGridReady}
                        onColumnVisible={this.onColumnVisible}
                        onColumnResized={this.onColumnResized}

                        popupParent={this.state.popupParent}
                        enableCharts={true}
                        chartThemeOverrides={this.state.chartThemeOverrides}
                        onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                    />
                    : <div>Loading</div>}
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({user})=>{
    return user
}

export default connect(mapStateToProps)(AgGridComponent);