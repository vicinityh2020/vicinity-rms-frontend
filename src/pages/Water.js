import React from 'react';
import {Breadcrumb, Col, Grid, Row} from "react-bootstrap";
import Header from "../components/Header";
import ChartBox from "../components/ChartBox";
import AlarmTable from "../components/AlarmTable";
import CurrentRate from "../components/CurrentRate";
import FilterMenu from "../components/FilterMenu";
import Threshold from "../components/Threshold";
import axios from 'axios';

import {Config} from "../config";

class Water extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day: Date.parse(new Date().toDateString()) / 1000,
            units: 'L',
            dataset: [],
            labels: [],
            got: false,
        };
    }

    componentDidMount() {
        let u = `${Config.serviceUrl}/api/water/usage/day/${this.state.day}`;

        console.log('accessing ' + u);
        axios.get(`${Config.serviceUrl}/api/water/usage/day/${this.state.day}`, {
            headers: {
                'Accept': 'application/json'
            }})
            .then(
                (r) => {
                    console.log('YAY!');
                    console.log(r);
                }
        )
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header title="Resource Management Service"/>
                <Grid>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Power Consumption</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="chartboxes">
                        <Col xs={12} md={4}>
                            <FilterMenu/>
                        </Col>

                        <Col xs={12} md={4}>
                            <CurrentRate units={this.state.units}/>
                        </Col>

                        <Col xs={12} md={4}>
                            <Threshold units={this.state.units}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom: '60px'}} xs={12} md={12}>
                            <ChartBox units={this.state.units} data={[]} labels={[]}/>
                        </Col>
                        <Col xs={12} md={12}>
                            <AlarmTable resource="power"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Water;
