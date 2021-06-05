import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <footer class="footer">
	
		<div class="footer-top section">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-md-6 col-12">
				
						<div class="single-footer about">
							<div class="logo">
								<a href="index.html"><img src="images/logo2.png" alt="#"/></a>
							</div>
							<p class="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
							<p class="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0858843965</a></span></p>
						</div>
						
					</div>
					<div class="col-lg-2 col-md-6 col-12">
				
						<div class="single-footer links">
							<h4>Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Faq</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
					
					</div>
					<div class="col-lg-2 col-md-6 col-12">
					
						<div class="single-footer links">
							<h4>Customer Service</h4>
							<ul>
								<li><a href="#">Payment Methods</a></li>
								<li><a href="#">Money-back</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">Shipping</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
					
					</div>
					<div class="col-lg-3 col-md-6 col-12">
					
						<div class="single-footer social">
							<h4>Get In Tuch</h4>
						
							<div class="contact">
								<ul>
									<li>NO. 101B - Le Huu Trac - Da Nang</li>
									<li>Viet Nam.</li>
									<li>sy.nguyen22@student.passerellesnumeriques.org</li>
									<li>+0858843965</li>
								</ul>
							</div>
							
							<ul>
								<li><a href="#"><i class="ti-facebook"></i></a></li>
								<li><a href="#"><i class="ti-twitter"></i></a></li>
								<li><a href="#"><i class="ti-flickr"></i></a></li>
								<li><a href="#"><i class="ti-instagram"></i></a></li>
							</ul>
						</div>
					
					</div>
				</div>
			</div>
		</div>
		
		<div class="copyright">
			<div class="container">
				<div class="inner">
					<div class="row">
						<div class="col-lg-6 col-12">
							<div class="left">
								<p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div class="col-lg-6 col-12">
							<div class="right">
								<img src="images/payments.png" alt="#"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
        );
    }
}


export default Footer;