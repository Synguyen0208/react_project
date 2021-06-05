import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Function from "../../function";
import StarRatingComponent from 'react-star-rating-component';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import history from "../../history";
import { store } from 'react-notifications-component';
import "../../css/css/reset.scoped.css";
class Modal extends Component {
    call =new Function();
    constructor(props) {
        super(props);
        this.state={
            review:[]
        }
    }
    componentDidMount(){
        
    }
    
    addCart=()=>{
		if(localStorage.getItem("user")){
            store.addNotification({
				title: "SUCCESS!",
				message: "Add item into Cart.",
				type: "success",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 1000
				  }
			  })
			const form=new FormData;
			form.append("id_pro", document.getElementById('ma').value);
			form.append("email", JSON.parse(localStorage.getItem("user")).email);
			form.append("status", "addcart");
			this.call.callAPI("http://localhost/react-project1/cart.php", form, "POST");
        }
        else{
            if(window.confirm("Do you want go to login page?")==true){
                history.push("/login");
				window.location.reload();
            }
        }
		
    }
    render() {
       
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
				
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close"
							aria-hidden="true"></span></button>
				</div>
				<ReactNotification/>
				<div class="modal-body">
					<div class="row no-gutters">
						<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
							<img style={{height:"30rem", width:"25rem"}} id="image"  alt="#"/>
						</div>
						<div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
							<div class="quickview-content">
								<h2 id="name"></h2>
								<div class="quickview-ratting-review">
									<div class="quickview-ratting-wrap">
                                        <input style={{display:"none"}} id="ma" type="text"></input>
                                        
                                        <StarRatingComponent name = "rate1"
                                            starCount = { 5 }
                                            value={this.props.star}
                                        />
										<a id="num"></a>
                                        
									</div>
									<div class="quickview-stock">
										<span><i class="fa fa-check-circle-o"></i> in stock</span>
									</div>
								</div>
								<h3 id="price"></h3>
								
								<div class="quickview-peragraph">
									<p id="title"></p>
								</div>
								<div class="size">
									<div class="row">
										<div class="col-lg-6 col-12">
                                        
											<h5 class="title">Manufacturing Date</h5>
											<span id="MFG"></span>
										</div>
										<div class="col-lg-6 col-12">
											<h5 class="title">Expiry date</h5>
											<span id="ED"></span>
										</div>
									</div>
								</div>
								<div class="size">
									<div class="input-group">
										<div class="button minus">
                                            <h5 class="title">Mass</h5>
											<span id="mass"></span>
										</div>
									</div>
								</div>
								<div class="add-to-cart">
									<a onClick={this.addCart} class="btn">Add to cart</a>
									<a href="#" class="btn min"><i class="ti-heart"></i></a>
									<a href="#" class="btn min"><i class="fa fa-compress"></i></a>
								</div>
								<div class="default-social">
									<h4 class="share-now">Share:</h4>
									<ul>
										<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a class="youtube" href="#"><i class="fa fa-pinterest-p"></i></a></li>
										<li><a class="dribbble" href="#"><i class="fa fa-google-plus"></i></a></li>
									</ul>
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


export default Modal;