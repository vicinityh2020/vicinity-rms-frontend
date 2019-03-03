import React from 'react';
import PropTypes from 'prop-types';
import {Button, Panel} from "react-bootstrap";

class CurrentRate extends React.Component {

    static propTypes = {
        units: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            threshold: 10000
        };
    }

    componentDidMount() {

        console.log("Debugging component");

        fetch('/api/water/threshold').then(value => {
            console.log(value);
            return value.json();
        }).then(json => {
            console.log("JSON:" + json['value']);
            this.setState({threshold: json['value']});
        }).catch(error => {
            alert('Debugging');
            console.log(error);
            window.location.href = '/';
        });
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>Current Value</Panel.Heading>
                <Panel.Body style={{padding: '42px 15px'}}>
                    <span className="blue">
                        {(this.state.threshold == 4) ? 6 : 4}
                        {this.props.units}
                    </span>
                    <Button style={{float: 'right'}} bsStyle="primary">Refresh</Button>
                </Panel.Body>
            </Panel>
        )
    }
}

export default CurrentRate;
