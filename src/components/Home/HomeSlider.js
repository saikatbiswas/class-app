import React,{ Component } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import Mybutton from "../../utils/button";


class HomeSlider extends Component {

    render(){

        const slides = [
            {
                img:'./images/featured/featured_home.jpg',
                lineOne:'Fender',
                lineTwo:'Custom Shop',
                lineTitle:'Shop Now',
                linkTo:'/shop'
            },
            {
                img:'./images/featured/featured_home_2.jpg',
                lineOne:'B-Stok',
                lineTwo:'Awesome Discounts',
                lineTitle:'View Offers',
                linkTo:'/shop'
            },
            {
                img:'./images/featured/featured_home_3.jpg',
                lineOne:'Fender-2',
                lineTwo:'WOW! upto 30% off',
                lineTitle:'Shop Now',
                linkTo:'/shop'
            }
        ];

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }

        const renderSlider = () => (
            slides ? 
                slides.map((item, i)=>(
                    <div key={i}>
                        <div className="featured_image"
                            style={{
                                background: `url(${item.img})`,
                                height: '500px',
                            }}
                        >
                            <div className="featured_action">
                                <div className="tag title">{item.lineOne}</div>
                                <div className="tag low_title">{item.lineTwo}</div>
                                <Mybutton 
                                    type="default"
                                    title={item.lineTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))
            :null
        )

        return(
            <div className="featured_container">
                <Slider {...settings}>
                    {renderSlider()}
                </Slider>
            </div>
        )
    }
}

export default withRouter(HomeSlider);