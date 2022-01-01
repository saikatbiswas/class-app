import React, { Component } from "react";
import { List, ListItem, ListItemText, Checkbox, Collapse } from "@mui/material";
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/fontawesome-free-solid";
import { faAngleUp } from "@fortawesome/fontawesome-free-solid";


class CollapsableCheckbox extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            checked: []
        }
    }

    // state = {
    //     open: false,
    //     checked: []
    // }

    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open: this.props.initState
            });
        }
    }

    handleClick = ()=>{
        this.setState({
            open: !this.state.open
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
    )

    renderList = () => (
        this.props.list ?
            this.props.list.map(item =>(
                <ListItem 
                    key={item._id} 
                    style={{ padding:'10px 0' }}
                    secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={this.handleToggle(item._id)}
                          checked={this.state.checked.indexOf(item._id) !== -1}
                        />
                    }
                
                >
                    <ListItemText primary={this.props.title==='Fabric'?item.fabric:this.props.title==='Color'?item.color:item.name} />

                </ListItem>
            ))
        :null
    );

    // renderList = (value) => (
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        this.setState({
            checked: newChecked
        }, ()=>{
            this.props.handleFilter(newChecked);
        });
    }


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
                            {this.renderList()}
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

export default CollapsableCheckbox;

