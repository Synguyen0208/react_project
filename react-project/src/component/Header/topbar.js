import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Topbar extends Component {
    constructor(props) {
        super(props);

    }
	logout=()=>{
		localStorage.removeItem("user");
		window.location.reload();
	}
    render() {
		let button=null;
		if(localStorage.getItem("user"))
		button=<a onClick={this.logout}>Logout</a>;
		else
		button=<Link to="/login">Login</Link>;
        return (
            <div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
						
						<div class="top-left">
							<ul class="list-main">
								<li><i class="ti-headphone-alt"></i> +0858842065</li>
								<li><i class="ti-email"></i> sy.nguyen22@student.passerellesnumeriques.org</li>
							</ul>
						</div>
					
					</div>
					<div class="col-lg-8 col-md-12 col-12">
					
						<div class="right-content">
							<ul class="list-main">
								<li><Link to="/purchase">Purchase order</Link></li>
								<li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
								<li><i class="ti-user"></i> <a href="#">My account</a></li>
								<li><i class="ti-power-off"></i>{button}</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</div>
        );
    }
}



export default Topbar;