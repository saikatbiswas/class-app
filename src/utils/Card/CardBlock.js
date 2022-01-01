import React, { Component } from "react";
import Card from "./Card"; 
import PropTypes from 'prop-types';


class CardBlock extends Component {

    render(){

        const renderCards = () =>(
            this.props.list?
            this.props.list.map((card, i)=>(
                <Card 
                    key={card._id}
                    {...card}
                />
            ))
            :null
        ) 


        return(
            <div className="card_block" data-test="component-card-block">
                <div className="container">
                    { this.props.title ?
                        <div className="title">
                            {this.props.title}
                        </div>

                    :null}

                    <div
                        style={{
                            display:'flex',
                            flexWrap:'wrap'
                        }}
                    >
                        { renderCards(this.props.list) }
                    </div>


                </div>
            </div>
        )
    }
}

CardBlock.propTypes = {
    title:PropTypes.string.isRequired
}

export default CardBlock;