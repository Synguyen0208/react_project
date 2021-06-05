import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from "react-stripe-checkout";
import history from "../history";
import axios from "axios";
import Function from "../function";
class Checkout extends Component {
    data=[];
    call = new Function();
    constructor(props) {
        super(props);
        this.state={
            shipping:[],
            ship_money:0,
            ship_company:null,
            address:null,
            phone:null
        }
    }

    componentDidMount(){
        if(localStorage.getItem("user")){
            if(!localStorage.getItem("item")){
                history.push("/home");
                window.location.reload();
            }
            this.data=JSON.parse(localStorage.getItem("item"));
            axios({
                method: 'GET',
                data: { text: "jjjj" },
                url: 'http://localhost/react-backend/shipping.php',
                //timeout: 4000, // 4 seconds timeout          
            })
                .then(response => {
                    this.setState({ shipping: response.data });
                })
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
    
    handleChange=(event)=>{
        this.state.shipping.map(e=>{
            if(e.code==event.target.value){
                let set={ship_money:e.ship_money};
                let set1={ship_company:e.code};
                this.setState(set);
                this.setState(set1);
            }
            
        })
    }
    change=(event)=>{
        var nam=event.target.name;
        var val=event.target.value;
        this.setState({[nam]:val});
    }
    handleToken=(token, addresses) =>{
        
        const form=new FormData;
        form.append("email", JSON.parse(localStorage.getItem("user")).email);
        form.append("ship_id", this.state.ship_company);
        form.append('total', this.data.total);
        form.append("address", this.state.address);
        form.append('phone', this.state.phone);
        form.append('detail', JSON.stringify(JSON.parse(localStorage.getItem("item")).item));
        form.append('ship_money', this.state.ship_money);
        form.append('status', 'order');
        this.call.callAPI("http://localhost/react-backend/order.php", form, "POST");
        history.push('/thank');
        localStorage.removeItem("item");
        setTimeout(() => {
            window.location.reload();
        }, 500);
      }
    render() {
        var phoneno = /^\(?([0-9])\)$/;
        return (
            <form>
            <section class="shop checkout section">
			<div class="container">
				<div class="row"> 
                
					<div class="col-lg-8 col-12">
						<div class="checkout-form">
							<h2>Make Your Checkout Here</h2>
							<p>Please register in order to checkout more quickly</p>
					
							<div class="form">
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Phone Number<span>*</span></label>
                                            <input type="tel" id="phone" name="phone" onChange={this.change} pattern="[0-9]" required></input>
											{(isNaN(this.state.phone) || this.state.phone==null || this.state.phone.length<9 || this.state.phone.length>13) &&
                                            <span style={{color:"red"}}>Invalid phone number</span>
                                            }
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Address<span>*</span></label>
											<input type="text" name="address" onChange={this.change} placeholder="" required="required"/>
										</div>
									</div>
                                    <div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Ship company<span>*</span></label>
											<select name={this.props.name} id="industry" onChange={this.handleChange}>
                                                {
                                                    this.state.shipping.map(element => {
                                                        return (<option value={element.code}> { element.name} </option>)
                                                    })
                                                }
                                            </select>
										</div>
									</div>
                            </div>
						</div>
					</div>
					<div class="col-lg-4 col-12">
						<div class="order-details">
						
							<div class="single-widget">
								<h2>CART  TOTALS</h2>
								<div class="content">
									<ul>
										<li>Sub Total<span>${this.data.total}</span></li>
										<li>(+) Shipping<span>${this.state.ship_money}</span></li>
										<li class="last">Total<span>${parseFloat(this.state.ship_money)+parseFloat(this.data.total)}</span></li>
									</ul>
								</div>
							</div>
						
							<div class="single-widget payement">
								<div class="content">
									<img src="images/payment-method.png" alt="#"/>
								</div>
							</div>
						
							<div class="single-widget get-button">
								<div class="content">
									<div class="button">
                                        {(this.state.ship_company!=null && !isNaN(this.state.phone) && this.state.address!=null && this.state.phone!=null && this.state.phone.length>9 && this.state.phone.length<13) && 
                                        <StripeCheckout type="submit"
                                        stripeKey="pk_test_51Is8QGG3otvWF5ZZpnmSJkOE5hj12eVjW9U6qxD0VbsjXzd1HtHK7cLboYVJ3GUWqkgjh2w49mBAexmGd0xfqrFo00Ns1OhItu"
                                        token={this.handleToken}
                                        amount={parseFloat(this.state.ship_money)+parseFloat(this.data.total)}
                                    />
                                        }
                                    
									</div>
								</div>
							</div>
							
						</div>
					</div>

				</div>
			</div>
		</section>
        </form>
        );
    }
}


export default Checkout;