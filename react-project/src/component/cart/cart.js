import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Function from "../function";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import history from "../history";

import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
class Cart extends Component {
    call = new Function();
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item:[],
            total:0
        }
    }
    componentDidMount() {
        if(localStorage.getItem("user")){
            this.intervalId = setInterval(this.timer.bind(this), 1000);
            this.getData();
        }
        else{
            if(window.confirm("Do you want go to login page?")==true){
                history.push("/login");
            }
            else
            history.push("/");
            window.location.reload();
            
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    timer() {
        this.getData();
    }
    getData=()=>{
        var email = JSON.parse(localStorage.getItem("user")).email;
        // alert(email);
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/cart.php?email=' + email,
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ data: response.data });
                // console.log(response.data);
            })
    }
    delete = (id_pro, id_cus) => {
        const form = new FormData;
        form.append("id_pro", id_pro);
        form.append("id_cus", id_cus);
        form.append("status", "delete");
        this.call.callAPI("http://localhost/react-project1/cart.php", form, "POST");
        setTimeout(window.location.reload(), 200);
    }
    change = (id_pro, id_cus, sign, quantity) => {
        if (quantity - 1 == 0) {
            this.delete(id_pro, id_cus);
        }
        else {
            const form = new FormData;
            form.append("id_pro", id_pro);
            form.append("id_cus", id_cus);
            form.append("sign", sign);
            form.append("status", "update");
            this.call.callAPI("http://localhost/react-project1/cart.php", form, "POST");
            // setTimeout(window.location.reload(), 200);
        }

    }
    setItem=()=>{
        this.state.data.map(e => {
            if(document.getElementById(e.id).checked==true)
            this.state.item.push({
                "id_pro":e.id_pro,
                "quantity":e.quantity
            });
        })
        localStorage.setItem("item", JSON.stringify(this.state));
    }
    checkAll = () => {
        this.setState({total:0});
        if (document.getElementById("checkall").checked == true) {
            let sum=0;
            this.state.data.map(e => {
                document.getElementById(e.id).checked = true;
            
                sum=sum+parseInt(e.sell_price)*parseInt(e.quantity);
            })
            let set={total:sum};
            this.setState(set);
        }
        else {
            
            this.state.data.map(e => {
                document.getElementById(e.id).checked = false;
            })
            this.setState({total:0});
        }
        console.log(this.state.item);
    }
    check = (event) => {
 
        this.setState({total:0});
        var check = 0;
        this.state.data.map(e => {
            if (document.getElementById(e.id).checked == false){
                check = 1;
            }
            else{
                let set={total:parseInt(this.state.total)+parseInt(e.sell_price)*parseInt(e.quantity)};
                this.setState(set);
            }
        })
        if (check == 0)
            document.getElementById("checkall").checked = true;
        else
            document.getElementById("checkall").checked = false;
    }
 

    render() {
        return (
            <div class="shopping-cart section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table shopping-summery">
                                <thead>
                                    <tr class="main-hading">
                                        <th><input id="checkall" onClick={this.checkAll} style={{ backgroundColor: "orange" }} type="checkbox"></input></th>
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th class="text-center">UNIT PRICE</th>
                                        <th class="text-center">QUANTITY</th>
                                        <th class="text-center">TOTAL</th>
                                        <th class="text-center"><i class="ti-trash remove-icon"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {this.state.data.map(e => {
                                        return (<tr>
                                            <td><input onClick={this.check} type="checkbox" id={e.id}></input></td>
                                            <td class="image" data-title="No"><img src={e.image} alt="#" /></td>
                                            <td class="product-des" data-title="Description">
                                                <p class="product-name"><a href="#">{e.name}</a></p>
                                                <p class="product-des">{e.title}</p>
                                            </td>
                                            <td class="price" data-title="Price"><span>{e.sell_price}</span></td>
                                            <td class="qty" data-title="Qty">
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" onClick={() => this.change(e.id_pro, e.id_cus, "minus")} data-type="minus" data-field="quant[1]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="100" value={e.quantity} />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" onClick={() => this.change(e.id_pro, e.id_cus, "plus")} data-type="plus" data-field="quant[1]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="total-amount" data-title="Total"><span>{e.sell_price * e.quantity}</span></td>
                                            <td class="action" data-title="Remove"><a onClick={() => this.delete(e.id_pro, e.id_cus)}><i class="ti-trash remove-icon"></i></a></td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                                <div class="col-12">
                                    <div class="total-amount">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-5 col-12">
                                              
                                            </div>
                                            <div class="col-lg-4 col-md-7 col-12">
                                                <div class="right">
                                                    <ul>
                                                        <li>Cart Subtotal<span>${this.state.total}</span></li>
                                                        
                                                    </ul>
                                                    <div class="button5">
                                                        {this.state.total>0&&
                                                            <Link to="/checkout" onClick={this.setItem} class="btn">Check out</Link>
                                                        }
                                                        <Link to="/shop" class="btn">Continue shopping</Link>
                                                    </div>
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

export default Cart;