import React from 'react';
import PropTypes from 'prop-types';
import {Button, Panel} from "react-bootstrap";

class Threshold extends React.Component {

    static propTypes = {
        units: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Panel>
                <Panel.Heading>Threshold Values</Panel.Heading>
                <Panel.Body style={{padding: '42px 15px'}}>
                    <span className="blue">170 {this.props.units + 'h'}</span>
                    <Button style={{float: 'right'}} bsStyle="primary">Modify</Button>
                </Panel.Body>
            </Panel>
        )
    }
}

export default Threshold;
