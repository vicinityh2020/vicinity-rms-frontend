import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from "react-bootstrap";
import '../css/Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageHeader>
                {this.props.title}
            </PageHeader>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
