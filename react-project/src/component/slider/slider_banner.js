import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Slider_banner extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section class="midium-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner">
                                <img style={{height:"22rem"}} src="https://vcdn1-giaitri.vnecdn.net/2013/12/06/Hinh-1-2658-1386320623-1377-1386327314.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=jDotESP7jniWf--gpPsQ_g" alt="#" />
                                <div style={{marginTop:"5rem"}} class="content">
                                    <Link to="/shop">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner">
                                <img style={{height:"22rem"}} src="https://image-us.eva.vn/upload/2-2020/images/2020-06-10/su-that-ve-bi-quyet-tre-mai-khong-gia-cua-midu-chi-em-nao-cung-can-biet-yy-1591752993-485-width640height361.jpg" alt="#" />
                                <div style={{marginTop:"5rem"}} class="content">
                                    <Link to="/shop">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Slider_banner;