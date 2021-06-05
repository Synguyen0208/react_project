import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shop from './shop';

class Search extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Shop name={this.props.match.params.name.split("=")[1]}/>
        );
    }
}


export default Search;