import React, {Component} from "react";
import Card from './Card'


class CardProductBlock extends Component {

    render(){
        const props = this.props;

        const renderCards = ()=> (
            props.list ?
                props.list.map(card => (
                    <Card 
                        key={card._id}
                        {...card}
                        grid={props.grid}
                    />
                ))
            :null
        )

        return(
            <div className="card_block_shop">
                <div>
                    {props.list?
                        props.list.length >0 ?
                            renderCards()
                        :
                        <div className="no_result">
                            Sorry!!! No Product Found.
                        </div>
                    :null}
                </div>
            </div>
        )
    }
}

export default CardProductBlock;