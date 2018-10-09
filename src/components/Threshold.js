import React from 'react';
import PropTypes from 'prop-types';
import {Button, Panel} from "react-bootstrap";

class Threshold extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            threshold: 0
        };
        //this.getThreshold = this.getThreshold.bind(this);
    }

    static propTypes = {
        units: PropTypes.string.isRequired,
    };

    componentDidMount() {
        fetch('/api/water/threshold', {
            headers: {}
        }).then(value => {
            return value.json();
        }).then(json => {
            this.setState({threshold: json['value']});
        }).catch(error => {
            alert('VAS backend is offline. Please run VAS server before frontend.');
            console.log(error);
            window.location.href = '/';
        });
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>Threshold Values</Panel.Heading>
                <Panel.Body style={{padding: '42px 15px'}}>
                    <span className="blue">{this.state.threshold} {this.props.units}</span>
                    <Button style={{float: 'right'}} bsStyle="primary" onClick={() => {
                        window.location.href = `/admin/application/settings/1/change`;
                    }}>Modify</Button>
                </Panel.Body>
            </Panel>
        )
    }
}

export default Threshold;
