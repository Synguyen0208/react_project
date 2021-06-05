import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Show from './content/show';

class Content extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div style={{padding:"23px"}} class="product-area section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title">
                            <h2>Trending Item</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <Show/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


export default Content;