import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Order extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                <tr>

                    <td align="center" style={{ padding: "35px 35px 20px 35px", backgroundColor: "#ffffff" }} bgcolor="#ffffff">
                        <Link to="/">Go back Home Page</Link>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style={{ maxWidth: "600px" }}>
                            <tr>
                                <td align="center" style={{ fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "25px" }}> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="125" height="120" style={{ display: "block", border: "0px" }} /><br />
                                    <h2 style={{ fontSize: "30px", fontWeight: "800", lineHeight: "36px", color: "#333333", margin: "0" }}> Thank You For Your Order! </h2>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" style={{ fontFamily: "Open Sans Helvetica Arial sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "10px" }}>
                                    <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "#777777" }}></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        );
    }
}


export default Order;