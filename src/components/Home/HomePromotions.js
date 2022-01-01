import React, { Component } from "react";
import Mybutton from "../../utils/button";


class HomePromotions extends Component {
    render(){

        const promotion = {
            img:'./images/featured/featured_home_3.jpg',
            lineOne:'Up to 40% off',
            lineTwo:'Custom Shop',
            lineTitle:'Shop Now',
            linkTo:'/shop'
        }

        const renderPromotion = () => (
            promotion?
                <div className="home_promotion_img"
                    style={{
                        background:`url(${promotion.img})`
                    }}
                >
                    <div className="tag title">{promotion.lineOne}</div>
                    <div className="tag low_title">{promotion.lineTwo}</div>
                    <Mybutton 
                        type="default"
                        title={promotion.lineTitle}
                        linkTo={promotion.linkTo}
                        addStyles={{
                            margin:'10px 0 0 0'
                        }}
                    />
                    
                </div>

            :null
        )

        return(
            <div className="home_promotion">
                {renderPromotion()}
            </div>
        )
    }
}

export default HomePromotions;