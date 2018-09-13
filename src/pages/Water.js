import React from 'react';
import {Breadcrumb, Col, Grid, Row} from "react-bootstrap";
import Header from "../components/Header";
import ChartBox from "../components/ChartBox";
import AlarmTable from "../components/AlarmTable";
import CurrentRate from "../components/CurrentRate";

class Water extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            units: 'L',
        };
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header title="Resource Management Service"/>
                <Grid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Water Consumption</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="chartboxes">
                        <Col xs={12} md={8}>
                            <ChartBox units={this.state.units} data={[]} labels={[]}/>
                        </Col>

                        <Col xs={12} md={4}>
                            <CurrentRate units={this.state.units}/>
                            <AlarmTable resource="water"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Water;
