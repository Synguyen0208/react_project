import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from 'react-router-dom';
import history from "../../history";
// import "../css/css/reset.scoped.css";
// import '../css/css/responsive.css';
class Middle_inner extends Component {
    constructor(props) {
        super(props);
		this.state={
			icon:null,
			cart:[],
			name:""
		}
    }
	getData=()=>{
		if(localStorage.getItem("user")){
			var email=JSON.parse(localStorage.getItem("user")).email;
			const form=new FormData;
			// console.log(JSON.parse(localStorage.getItem("user")).email);
			form.append("email", JSON.parse(localStorage.getItem("user")).email);
			 form.append("status", "icon");
		 axios({
			 method: 'POST',
			 data:form,
			 url: 'http://localhost/react-backend/account.php',
			 timeout: 4000,    // 4 seconds timeout          
			})
			.then(response => {
				// console.log(response.data);
			  this.setState({icon:response.data.image});
		   })        
		   .catch(error => console.error('timeout exceeded'));
		   
		   axios({
			method: 'GET',
			data:form,
			url: 'http://localhost/react-backend/cart.php?email='+email,
			timeout: 4000,    // 4 seconds timeout          
		   })
		   .then(response => {
			//    console.log(response.data);
			 this.setState({cart:response.data});
		  })        
		  .catch(error => console.error('timeout exceeded'));
		   }
	}
   componentDidMount(){
	   
	   this.intervalId = setInterval(this.timer.bind(this), 1000);
		this.getData();
   }
   componentWillUnmount() {
    clearInterval(this.intervalId);
  }
   timer() {
    this.getData();
  }
  handleChange=(event)=>{
	  this.setState({
		  name:event.target.value
	  })
  }
  handleSubmit=(event)=>{
	event.preventDefault();
	history.push("/search/:name="+this.state.name);
	// window.location.reload();
  }
    render() {
		let icon=null;
		if(this.state.icon!=null)
		icon=<img style={{width:"2rem"}} src={this.state.icon}/>
		else
		icon=<i class="fa fa-user-circle-o" aria-hidden="true"></i>;
        return (
            <div class="middle-inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-12">
						
						<div class="logo">
							<a href="index.html"><img src="images/logo.png" alt="logo"/></a>
						</div>
						
						<div class="search-top">
							<div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
							
							<div class="search-top">
								<form class="search-form">
									<input type="text" placeholder="Search here..." name="search"/>
									<button value="search" type="submit"><i class="ti-search"></i></button>
								</form>
							</div>
							
						</div>
						
						<div class="mobile-nav"></div>
					</div>
					<div class="col-lg-8 col-md-7 col-12">
						<div class="search-bar-top">
							<div class="search-bar">
								<form>
									<input name="name" id="name" onChange={this.handleChange} placeholder="Search Products Here....." type="search"/>
									<Link to={"search/:name="+this.state.name}><button class="btnn"><i class="ti-search"></i></button></Link>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-md-3 col-12">
						<div class="right-bar">
							
							<div class="sinlge-bar">
								<a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
							<div class="sinlge-bar">
								<a href="#" class="single-icon">{icon}</a>
							</div>
							<div class="sinlge-bar shopping">
								<Link to="/cart" class="single-icon"><i class="ti-bag"></i> <span class="total-count">{this.state.cart.length}</span></Link>
								
								<div class="shopping-item">
									<div class="dropdown-cart-header">
										<span>{this.state.cart.length} Items</span>
										<Link to="/cart">View Cart</Link>
									</div>
									<ul class="shopping-list">
										{this.state.cart.map(e=>{
											return(<li>
												<a class="cart-img"><img src={e.image} alt="#"/></a>
												<h4><a href="#">{e.name}</a></h4>
												<p class="quantity">{e.quantity}x - <span class="amount">{e.sell_price}$</span></p>
											</li>)
										})}
									
									</ul>
									<div class="bottom">
										
										<Link to="/cart" class="btn animate">Checkout</Link>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}


export default Middle_inner;