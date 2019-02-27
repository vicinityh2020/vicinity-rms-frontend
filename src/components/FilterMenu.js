import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, Panel, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class FilterMenu extends React.Component {

    // static propTypes = {
    //     units: PropTypes.string.isRequired,
    // };

    render() {
        return (
            <Panel>
                <Panel.Heading>Filter Menu</Panel.Heading>
                <Panel.Body>
                    <ButtonToolbar style={{marginBottom: 20}}>
                        <ToggleButtonGroup type="radio" name="period-options" defaultValue={1}>
                            <ToggleButton value={1}>Hourly</ToggleButton>
                            <ToggleButton value={2}>Daily</ToggleButton>
                            <ToggleButton value={3}>Monthly</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="aggregation-options" defaultValue={2}>
                            <ToggleButton value={1}>Average</ToggleButton>
                            <ToggleButton value={2}>Total</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Panel.Body>
            </Panel>
        );
    }
}

export default FilterMenu;
