import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout_left from "./layout_left";
import Layout_right from "./layout_right";
import history from "./history";
import Admin_Acc_Ad from '../Pages/amin_account_admin';
import Chat from './chat';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: <Layout_right />
        }
    }
    setData=(name)=>{
        switch (name) {
            case "chat":
                this.setState({data: <Chat/>})
                break;
        
            default:
                break;
        }
    }
    render() {
        if (localStorage.getItem("account") == null) {
            history.push("/login");
            window.location.reload();
        }
        return (

            <div id="layoutSidenav">
                <Layout_left click1={this.setData} />
                {this.state.data}
            </div>

        );
    }
}


export default Layout;