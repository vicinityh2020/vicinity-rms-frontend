import React from 'react';
import '../css/ServiceButton.css'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Glyphicon} from "react-bootstrap";

class ServiceButton extends React.Component {

    render() {

        return (
            <Link className="service-button" to={this.props.url}>
                <div className="service-name">{this.props.name}</div>
                <Glyphicon style={{color: this.props.glyphColor}} glyph={this.props.glyphSlug}/>
            </Link>
        );
    }
}

ServiceButton.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    glyphSlug: PropTypes.string.isRequired,
    glyphColor: PropTypes.string.isRequired,
};

export default ServiceButton;
