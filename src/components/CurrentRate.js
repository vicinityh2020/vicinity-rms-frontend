import React from 'react';
import PropTypes from 'prop-types';
import {Button, Panel} from "react-bootstrap";

class CurrentRate extends React.Component {

    static propTypes = {
        units: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Panel>
                <Panel.Heading>Current Value</Panel.Heading>
                <Panel.Body style={{padding: '42px 15px'}}>
                    <span className="blue">4 {this.props.units}</span>
                    <Button style={{float: 'right'}} bsStyle="primary">Refresh</Button>
                </Panel.Body>
            </Panel>
        )
    }
}

export default CurrentRate;
