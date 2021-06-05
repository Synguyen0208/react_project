import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/card_detail.scoped.css";
import StarRatingComponent from 'react-star-rating-component';
import Comment from './comment/Comment';
import Function from '../function';
import { Link } from 'react-router-dom';
// import { ToastContainer,toast } from "react-toastify";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import history from "../../history";
class Card_detail extends Component {
    call=new Function();
    constructor(props) {
        super(props);
        this.state={
            quantity:1
        }
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
            form.append("id_pro", this.props.id);
            form.append("email", JSON.parse(localStorage.getItem("user")).email);
            form.append("status", "addcart");
            this.call.callAPI("http://localhost/react-backend/cart.php", form, "POST");
        }
        else{
            if(window.confirm("Do you want go to login page?")==true){
                history.push("/login");
				window.location.reload();
            }
        }
    }
    hanleChange=(event)=>{
        this.setState({
            quantity: event.target.value
        })
    }
    render() {
        
        let star=5;
        if(this.props.star>0)
        star=this.props.star;
        return (
            <div class="card">
                <div class="container-fliud">
                    <div class="wrapper row">
                    <ReactNotification/>
                        <div class="preview col-md-6">
                            <div class="preview-pic tab-content">
                                <div class="tab-pane active" id="pic-1"><img style={{width:"20rem"}} src={this.props.image} /></div>
                            </div>
                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title">{this.props.name}</h3>
                            <div class="rating">
                                <div class="stars">
                                    <StarRatingComponent name = "rate1"
                                                starCount = { star }
                                                value={star}
                                            />
                                    </div>
                                <span class="review-no">{this.props.num} reviews</span>
                            </div>
                            <p class="product-description">{this.props.title}</p>
                            <h4 class="price">Current price: 
                                <span>             ${this.props.sell_price}</span><br></br>
                                <span class="old"><strike>${this.props.price}</strike> </span>
                            </h4>
                            <div>
                                <div class="row">
                                    <div class="col-md-6">
                                        Manufacturing Date:<br/> <h6>{this.props.MFG}</h6>
                                    </div>
                                    <div class="col-md-6">Expiry Date: <br/><h6>{this.props.ED}</h6> </div>
                                </div>
                            </div>
                            <div>Production company:
                                <h6>{this.props.com}</h6><br/>
                                Production company address:<h6>{this.props.address}</h6>
                            </div>
                            <div class="action">
                                <button class="add-to-cart btn btn-default" onClick={this.addCart} type="button">Add to cart</button>
                                <button style={{marginLeft:"2px"}} onClick={this.addCart} class="add-to-cart btn btn-default" type="button"><Link to="/cart">Buy Now</Link></button>
                            </div>
                        </div>
                    </div>
                    <Comment id_pro={this.props.id}/>
                </div>
            </div>
        );
    }
}

export default Card_detail;