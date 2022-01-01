import React, { Component } from "react";
import { renderCardImage } from "../tools";
import Mybutton from "../button";
import { faShoppingBag } from "@fortawesome/fontawesome-free-solid";
import PropTypes from 'prop-types';


class Card extends Component {

    render(){

        const props = this.props;

        return(
            <div className={`card_item_wrapper ${props.grid}`} data-test="component-card">
                <div className="image"
                    data-test="component-card-image"
                    style={{
                        background:`url(${renderCardImage(props.images)}) no-repeat`
                    }}
                >

                </div>
                <div className="action_container">
                    <div className="tags">
                        {/* <div className="brand">{props.brand.name}</div> */}
                        <div className="name">{props.name}</div>
                        <div className="name">$ {props.price}</div>
                    </div>
                </div>
                {props.grid ?
                    <div className="description">
                        {props.description}
                    </div>
                :null}

                <div className="actions">
                    <div className="button_wrapp">
                        <Mybutton 
                            type="default"
                            altClass="card_link"
                            title="View Product"
                            linkTo={`/product_details/${props._id}`}
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="button_wrapp">
                        <Mybutton 
                            type="icon_button"
                            addToCart={()=>{
                                console.log('Added to cart');
                            }}
                            icon={faShoppingBag}
                            addStyles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


Card.propTypes = {
    grid:PropTypes.bool,
    images:PropTypes.array
}

export default Card;