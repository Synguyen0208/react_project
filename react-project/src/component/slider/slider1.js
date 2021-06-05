import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Slider1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section class="small-banner section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img style={{height:"23rem"}} src="https://goccuaru.com/wp-content/uploads/2020/03/t%E1%BB%95ng-h%E1%BB%A3p.jpg" alt="#"/>
						<div class="content" style={{fontSize:"1rem", marginTop:"4rem"}}>
							<p>Man's Collectons</p>
							<h3 style={{color:"#F7941D"}}>Bringing the hidden beauty of women</h3>
							<Link style={{color:"blue", fontSize:"1rem"}} to="/"><b>SHOP NOW</b></Link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img style={{height:"23rem"}} src="https://tatthanhblog.files.wordpress.com/2020/03/web-my-pham-nhat.jpg" alt="#"/>
						<div class="content" style={{fontSize:"1rem", marginTop:"4rem"}}>
							<p>Best sells 2021</p>
							<h3 style={{color:"#F7941D"}}>Bringing the hidden beauty of women</h3>
							<Link style={{color:"blue", fontSize:"1rem"}} to="/"><b>SHOP NOW</b></Link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img style={{height:"23rem"}} src="https://giadinhvietnam.net/wp-content/uploads/2021/04/my-pham-nhat-sk-ii.jpg" alt="#"/>
						<div class="content" style={{fontSize:"1rem", marginTop:"4rem"}}>
							<p>Man's Collectons</p>
							<h3 style={{color:"#F7941D"}}>Bringing the hidden beauty of women</h3>
							<Link style={{color:"blue", fontSize:"1rem"}} to="/"><b>SHOP NOW</b></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        );
    }
}


export default Slider1;