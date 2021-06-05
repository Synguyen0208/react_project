import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Function from "../function";
import Modal from './modal/modal';
import axios from "axios";
import { Link } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import history from "../../history";
class Card_slider extends Component {
    call = new Function();

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        }
    }
    addCart = () => {
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
              const form = new FormData;
              form.append("id_pro", this.props.data.id);
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
    componentDidMount() {

    }
    set = () => {
        this.add_view();
        document.getElementById("image").src = this.props.data.image1;
        document.getElementById("name").innerHTML = this.props.data.name;
        document.getElementById("title").innerHTML = this.props.data.title;
        document.getElementById("price").innerHTML = this.props.data.sell_price + "$";
        document.getElementById("ED").innerHTML = this.props.data.ED;
        document.getElementById("MFG").innerHTML = this.props.data.MFG;
        document.getElementById("mass").innerHTML = this.props.data.mass + "gram";
        document.getElementById("num").innerHTML = this.props.data.num + " customer review";
        document.getElementById("ma").value = this.props.data.id;
    }
    add_view = () => {
        const form = new FormData;
        form.append("id_pro", this.props.data.id);
        form.append("status", "add_view");
        this.call.callAPI("http://localhost/react-backend/product.php", form, "POST");
    }
    render() {
        return (
            <div class="single-product">
                <ReactNotification/>
                <div class="product-img">
                    <Link to={"/detail/:id=" + this.props.data.id} onClick={this.add_view}>
                        <img style={{ height: "20rem" }} class="default-img" src={this.props.data.image1} alt="#" />
                    </Link>
                    <div class="button-head">
                        <div class="product-action">
                            <a data-toggle="modal" onClick={this.set} data-target="#exampleModal" title="Quick View" >
                                <i class=" ti-eye"></i>
                                <span>Quick Shop</span>
                            </a>
                            <a title="Wishlist" href="#">
                                <i class=" ti-heart "></i>
                                <span>Add to Wishlist</span>
                            </a>
                            <a title="Compare" href="#">
                                <i class="ti-bar-chart-alt"></i>
                                <span>Add toCompare</span>
                            </a>
                        </div>
                        <div class="product-action-2">
                            <a title="Add to cart" onClick={this.addCart}>Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h3><a href="product-details.html">{this.props.data.name}</a></h3>
                    <div class="product-price">
                        <span class="old">{this.props.data.price}$</span>
                        <span>{this.props.data.sell_price}$</span>
                    </div>
                </div>
            </div>
        );
    }
}



export default Card_slider;