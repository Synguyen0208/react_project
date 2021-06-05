import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topbar from './Header/topbar';
import Middle_inner from './Header/middle_inner';
import Header_inner from './Header/header_inner';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header class="header shop">
                <Topbar/>
                <Middle_inner />
                <Header_inner/>
	        </header>
        );
    }
}


export default Header;