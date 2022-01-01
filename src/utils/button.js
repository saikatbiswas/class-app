import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


const Mybutton = (props) => {

    const buttons = ()=>{
        let template = "";
        
        switch(props.type){

            case "default":
                template = <Link
                    className={props.altClass?props.altClass : 'link_default'}
                    to={props.linkTo}
                    {...props.addStyles}
                >
                    {props.title}
                </Link>
            break;
            case "icon_button":
                template = <div 
                    className='bag_link'
                    onClick={props.addToCart}
                    data-test="component-cart-button"
                >
                    <FontAwesomeIcon icon={props.icon} />
                </div>
            break;

            default:
                template = "";
        }

        return template;
    }


    return (
        <div className="my_link" data-test="button-component">
            {buttons()}
        </div>
    );
};

Mybutton.propTypes = {
    type:PropTypes.string.isRequired,
    altClass:PropTypes.string,
    addStyles:PropTypes.object,
    linkTo:PropTypes.string,
    title:PropTypes.string,
    addToCart:PropTypes.func
}

export default Mybutton;