import React, { Component } from "react";
import { List, ListItem, ListItemText, Slider , Collapse } from "@mui/material";
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/fontawesome-free-solid";
import { faAngleUp } from "@fortawesome/fontawesome-free-solid";

const followersMarks = [
    {
      value: 0,
      scaledValue: 0,
      label: "0"
    },
    {
      value: 1000,
      scaledValue: 1000,
      label: "1k"
    },
    {
      value: 2000,
      scaledValue: 2000,
      label: "2k"
    },
    {
      value: 3000,
      scaledValue: 3000,
      label: "3k"
    },
    {
      value: 4000,
      scaledValue: 4000,
      label: "5k"
    },
    {
      value: 5000,
      scaledValue: 5000,
      label: "5k"
    },
    {
        value: 6000,
        scaledValue: 6000,
        label: "6k"
    },
    {
        value: 7000,
        scaledValue: 7000,
        label: "7k"
    },
    {
        value: 8000,
        scaledValue: 8000,
        label: "8k"
    },
    {
        value: 9000,
        scaledValue: 9000,
        label: "9k"
    },
    {
      value: 10000,
      scaledValue: 10000,
      label: "10k+"
    }
];


class CollapsableRadio extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            price: [0, 10000]
        }
    };

    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open: this.props.initState
            });
        }
    };

    handleClick = ()=>{
        this.setState({
            open: !this.state.open
        });
    };

    valuetext(value) {
        return `₹ ${value}`;
    }

    handleChange = (event, newValue) => {

        this.setState({
            price: newValue
        }, ()=>{
            // this.props.handleRange(newValue);
        });
    }
    handleChangeCommitted = (event, newValue) => {

        this.setState({
            price: newValue
        }, ()=>{
            this.props.handleRange(newValue);
        });
    }

    handleAngle = ()=>(
        this.state.open ?
            <FontAwesomeIcon 
                icon={faAngleUp}
                className="icon"
            />
        :
            <FontAwesomeIcon 
                icon={faAngleDown}
                className="icon"
            />
    );
        


    render(){
        // console.log(this.props.list)
        return(
            <div className="collapse_items_wrapper">
                <List style={{borderBottom: '1px solid #dbdbdb'}}>
                    <ListItem onClick={this.handleClick} style={{padding: '10px 20px 10px 0'}}>
                        <ListItemText 
                            primary={this.props.title}
                            className="collapse_title"
                        />
                        
                        {this.handleAngle()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Slider
                                min={0}
                                step={1}
                                max={10000}
                                value={this.state.price}
                                onChange={this.handleChange}
                                onChangeCommitted={this.handleChangeCommitted}
                                valueLabelDisplay="auto"
                                // getAriaValueText={this.valuetext}
                                valueLabelFormat={this.valuetext}
                                marks={followersMarks}
                                aria-labelledby="non-linear-slider"
                            />
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

export default CollapsableRadio;