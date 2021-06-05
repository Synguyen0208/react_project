import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from "./content/card";
import axios from "axios";
import { Helmet } from 'react-helmet';
import "./css/jquery.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/shop.scoped.css";
import "./css/css/bootstrap.css";
import "./css/css/reset.scoped.css";
import "./css/css/style.css";
import "./css/css/responsive.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            category: [],
            min: 0,
            max: 199999,
            id: 1,
            n: 0,
            m:0,
            find: false
        }
    }
    componentDidMount() {
        // window.location.reload();
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
        
        if(this.props.name!=undefined){
            const form=new FormData;
            form.append("method", "get_name");
            form.append("name", this.props.name);
            axios({
                method: 'POST',
                data: form,
                url: 'http://localhost/react-backend/product.php',
                timeout: 4000,    // 4 seconds timeout          
            })
                .then(response => {
                    this.setState({ data: response.data });
                    // console.log(response.data);
                    if(response.data.length<100){
                        this.setState({
                            n:response.data.length
                        })
                    }
                })
                .catch(error => console.error('timeout exceeded'));
        }
        else{
            axios({
                method: 'GET',
                data: { text: "jjjj" },
                url: 'http://localhost/react-backend/product.php',
                timeout: 4000,    // 4 seconds timeout          
            })
                .then(response => {
                    this.setState({ data: response.data });
                    if(response.data.length<100){
                        this.setState({
                            n:response.data.length
                        })
                    }
                    // console.log(response.data);
                })
                .catch(error => console.error('timeout exceeded'));
        }
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/category.php',
            timeout: 4000,    // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ category: response.data });
                // console.log(response.data);
            })
            .catch(error => console.error('timeout exceeded'));
	}


    item = (industry) => {
        this.setState({ find: true });
        this.setState({ id: industry });
    }
    submit = (event) => {
        event.preventDefault();
    }
    handleChange = (event) => {
        if (event.target.value > this.state.data.length) {
            this.setState({
                m: this.state.data.length
            });
        }
        else {
            this.setState({
                m: event.target.value
            });
        }
    }
    hanldeRange = (event) => {
        // alert("ff");
        let val=document.getElementById("amount").value;
        let strPrice=val.split(" - ");
        let min=strPrice[0].replace("$", "");
        let max=strPrice[1].replace("$", "");
        // alert(strPrice[0]);
        this.setState({min:min});
        this.setState({max:max});
        event.preventDefault();
    }
    render() {
        let data2 = [];
        if (this.state.data.length > 0) {
            for (let index = 0; index < this.state.n; index++) {
                let data = {
                    id: this.state.data[index].id,
                    name: this.state.data[index].name,
                    title: this.state.data[index].title,
                    image1: this.state.data[index].image1,
                    price: this.state.data[index].price,
                    sell_price: this.state.data[index].sell_price,
                    ED: this.state.data[index].ED,
                    MFG: this.state.data[index].MFG,
                    mass: this.state.data[index].mass,
                    num: this.state.data[index].num,
                    star: this.state.data[index].star,
                }
                let star = 5;
                if (this.state.data[index].star != null)
                    star = this.state.data[index].star;
                if(this.state.m>0){
                    if(index<this.state.m){
                        if (this.state.find == true) {
                            if (this.state.data[index].industry_id == this.state.id) {
                                
                                if (parseInt(this.state.data[index].sell_price) >= parseInt(this.state.min)&&parseInt(this.state.data[index].sell_price) <= parseInt(this.state.max))
                                    data2.push(<Card data={data} star={star} review="5"></Card>);
                            }
                        }
                        else {
                            if (parseInt(this.state.data[index].sell_price) >= parseInt(this.state.min)&&parseInt(this.state.data[index].sell_price) <= parseInt(this.state.max))
                                data2.push(<Card data={this.state.data[index]} star={star} review="5"></Card>);
                        }
                    }
                }
                else{
                    data2.push(<Card data={this.state.data[index]} star={star} review="5"></Card>);
                }
                
            }

        }
        return (
            <div style={{marginRight:"auto", marginLeft:"auto", width:"80%"}}>
            <section style={{width:"100%"}} className="product-area shop-sidebar shop section">
{/* <Helmet><script src="js/active.js"></script></Helmet> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                        
                            <div className="shop-sidebar">
                                <form onSubmit={this.submit}>
                                    <div className="single-widget category">
                                        <h3 className="title">Categories</h3>
                                        <ul className="categor-list">
                                            {this.state.category.map(e => {
                                                return <li onClick={() => this.item(e.id)}>{e.industry}</li>
                                            })}
                                            <li><button style={{backgroundColor:"#ffccff"}} onClick={() => this.setState({ find: false })} type="submit">All product</button>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                                <div className="single-widget range">
                                    <h3 className="title">Shop by Price</h3>

                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <div id="slider-range"></div>
                                            <div className="price_slider_amount">
                                                <div className="label-input">
                                                    <span>Range:</span><input readOnly="true" type="text" id="amount" name="price" placeholder="Add Your Price" />
                                                </div>
                                                <button id="get" onClick={this.hanldeRange}></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-top">
                                        <div className="shop-shorter">
                                            <div className="single-shorter">
                                                <label>Show :</label>
                                                <form onSubmit={this.submit}>
                                                    <select name="n" onChange={this.handleChange}>
                                                        <option>03</option>
                                                        <option>15</option>
                                                        <option>25</option>
                                                        <option>30</option>
                                                        <option selected="selected">100</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {data2}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Helmet><script src="js/active.js"></script></Helmet> */}
            </section>
        </div>
        );
    }
}


export default Shop;