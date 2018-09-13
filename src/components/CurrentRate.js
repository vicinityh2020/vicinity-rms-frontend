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
                <Panel.Heading>Current Consumption Rate</Panel.Heading>
                <Panel.Body>
                    <span className="blue">86 {this.props.units + '/h'}</span>
                    <Button style={{float: 'right'}} bsStyle="primary">Refresh</Button>
                </Panel.Body>
            </Panel>
        )
    }
}

export default CurrentRate;
