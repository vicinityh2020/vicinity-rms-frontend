import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, Panel, Table, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class AlarmTable extends React.Component {

    static propTypes = {
        resource: PropTypes.oneOf(['water', 'power', 'temperature'])
    };

    constructor(props) {
        super(props);
    }

    static randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>Alarm Table</Panel.Heading>
                <Panel.Body>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Date & Time</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{AlarmTable.randomDate(new Date(2018, 0, 1), new Date()).toLocaleString()}</td>
                            <td><a href="#">More Info</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{AlarmTable.randomDate(new Date(2018, 0, 1), new Date()).toLocaleString()}</td>
                            <td><a href="#">More Info</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{AlarmTable.randomDate(new Date(2018, 0, 1), new Date()).toLocaleString()}</td>
                            <td><a href="#">More Info</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{AlarmTable.randomDate(new Date(2018, 0, 1), new Date()).toLocaleString()}</td>
                            <td><a href="#">More Info</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{AlarmTable.randomDate(new Date(2018, 0, 1), new Date()).toLocaleString()}</td>
                            <td><a href="#">More Info</a></td>
                        </tr>
                        </tbody>
                    </Table>
                </Panel.Body>
            </Panel>
        )
    }
}

export default AlarmTable;
