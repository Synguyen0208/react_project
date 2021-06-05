import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import Card_detail from './card_detail';
import axios from "axios";
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillUnmountMount() {
        window.location.reload();
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
    getData=()=>{
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-backend/product.php',
            timeout: 4000,    // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ data: response.data });
                // console.log(response);
            })
    }
    render() {
        let data = null;
        this.state.data.map(element => {
            if (element.id == this.props.match.params.id.split("=")[1]) {
                data = <Card_detail
                    id={element.id}
                    title={element.title}
                    image={element.image1}
                    name={element.name}
                    sell_price={element.sell_price}
                    quantity={element.quantity}
                    price={element.price}
                    MFG={element.MFG}
                    com={element.company}
                    address={element.address}
                    ED={element.ED}
                    star={element.star}
                    num={element.num}
                    />
            }
        })
        return (
            <div class="container">
                <Helmet>
                    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js" type="text/javascript" />
                </Helmet>
                <Helmet>
                    <script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript" />
                </Helmet>
                {data}
            </div>
        );
    }
}



export default Details;