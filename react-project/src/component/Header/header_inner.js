import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header_inner extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="header-inner">
			<div class="container">
				<div class="cat-nav-head">
					<div class="row">
						
						<div class="col-12">
							<div class="menu-area">
								<nav class="navbar navbar-expand-lg">
									<div class="navbar-collapse">	
										<div class="nav-inner">	
											<ul class="nav main-menu menu navbar-nav">
													<li class="active"><Link to="/">Home</Link></li>	
													<li><Link to="/shop">Shop<span class="new">New</span></Link>
														
													</li>
													<li><Link to="/chat">Chat with us</Link></li>
													<li><Link to="/about">About us</Link></li>
												</ul>
										</div>
									</div>
								</nav>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}


export default Header_inner;