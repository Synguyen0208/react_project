import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Function from "../function";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import history from "../history";

// import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
class Purchase extends Component {
    call = new Function();
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item:[],
            total:0
        }
    }
    getData=()=>{
        var email = JSON.parse(localStorage.getItem("user")).email;
        const form1=new FormData;
        form1.append("email", email);
        form1.append("status", "get_detail");
        // alert(email);
        axios({
            method: 'POST',
            data: form1,
            url: 'http://localhost/react-backend/order.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                // console.log(response.data);
                this.setState({ data: response.data });
            })
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
    render() {
        let body=[];
        if(this.state.data.length>0){

            this.state.data.map(e=>{
                for (let index = 0; index < e.length; index++) {
                    if(index==e.length-1){
                        body.push(<tr>
                            <td colSpan="">
                                <span style={{fontSize:"1rem"}}>Date order: </span><kbd>{e[index].date_order}</kbd><br/><br/>
                                <span style={{fontSize:"1rem"}}>EDD: <br/></span><kbd>{e[index].EDD}</kbd><br/><br/>
                                
                            </td>
                            <td colSpan="">
                                <span style={{fontSize:"1rem"}}>Status: </span ><mark style={{fontSize:"1.2rem"}}>{e[index].status}</mark>
                            </td>
                            <td colSpan="">
                                <span style={{fontSize:"1rem"}}>Ship company: </span><kbd>{e[index].ship}</kbd><br/><br/>
                                <span style={{fontSize:"1rem"}}>Ship fee: </span><mark style={{fontSize:"1.2rem"}}>${e[index].ship_money}</mark>
                                <span></span>
                            </td>
                            <td colSpan="">
                                <span style={{fontSize:"1rem"}}>Delivery address: </span>{e[index].address}<br/><br/>
                                <span style={{fontSize:"1rem"}}>Delivery phone: </span><mark style={{fontSize:"1.2rem"}}>${e[index].phone}</mark>
                                <span></span>
                            </td>
                            <td colSpan="">
                                <span style={{fontSize:"1rem"}}>Total money: </span><kbd>${e[index].total_money}</kbd>
                                <span></span>
                            </td>
                        </tr>)
                    }
                    else{
                        body.push(
                            <tr>
                            <td class="image" data-title="No"><img src={e[index].image1} alt="#" /></td>
                                <td class="product-des" data-title="Description">
                                    <span style={{fontSize:"1rem"}}><b>{e[index].name}</b></span>
                                    
                                    <p class="product-des">{e[index].title}</p>
                                </td>
                                <td class="price" data-title="Price"><span>{e[index].sell_price}</span></td>
                                <td class="qty" data-title="Qty">
                                    <div class="input-group">
                                        
                                    <kbd>X{e[index].quantity}</kbd>
                                        
                                    </div>
                                </td>
                                <td class="total-amount" data-title="Total"><span>{e[index].Total_amount}</span></td>
                                </tr>
                        )
                    }
                }
                body.push(<div><hr/></div>)
            })
        }
        return (
            <div class="shopping-cart section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table shopping-summery">
                                <thead>
                                    <tr class="main-hading">
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th class="text-center">UNIT PRICE</th>
                                        <th class="text-center">QUANTITY</th>
                                        <th class="text-center">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <hr></hr>
                                    {body}

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
                                                        {/* <li>Cart Subtotal<span>${this.state.total}</span></li> */}
                                                        
                                                    </ul>
                                                    <div class="button5">
                                                        {/* {this.state.total>0&&
                                                            <Link to="/checkout" onClick={this.setItem} class="btn">Check out</Link>
                                                        } */}
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

export default Purchase;