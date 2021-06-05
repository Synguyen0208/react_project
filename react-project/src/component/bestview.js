import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import axios from "axios";
import Card from './content/card';
import Card_slider from './content/card_slider';
import Slider_view from './slider/slider_view';
class BestView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {

		this.intervalId = setInterval(this.timer.bind(this), 1000);
		this.getData();
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	timer() {
		this.getData();
	}
	getData = () => {
		const form = new FormData;
		form.append("method", "get_view");
		axios({
			method: 'POST',
			data: form,
			url: 'http://localhost/react-backend/product.php',
			timeout: 4000,    // 4 seconds timeout          
		})
			.then(response => {
				this.setState({ data: response.data });
				console.log(response.data);
			})
	}

	render() {
		let slider;
		if (this.state.data.length != 0)
			slider = <Slider_view data={this.state.data} />;
		return (
			<div style={{padding:"23px"}} class="product-area most-popular section">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="section-title">
								<h2>Best view product</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							{
								slider
							}

						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default BestView;