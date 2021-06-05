import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Card_slider from '../content/card_slider';
class Slider_view extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="owl-carousel popular-slider">
                {this.props.data.map(element => {
                    let data = {
                        id: element.id,
                        name: element.name,
                        title: element.title,
                        image1: element.image1,
                        price: element.price,
                        sell_price: element.sell_price,
                        ED: element.ED,
                        MFG: element.MFG,
                        mass: element.mass,
                        num: element.num,
                        star: element.star,
                    }
                    let star = 5;
                    if (element.star != null)
                        star = element.star;
                    return (<Card_slider data={data} star={star} review="5"></Card_slider>);
                })}
                <Helmet>
                    <script src="js/jquery-migrate-3.0.0.js"></script>
                </Helmet>
            </div>
        );
    }
}


export default Slider_view;