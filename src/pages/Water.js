import React from 'react';
import {Breadcrumb, Col, Grid, Row} from "react-bootstrap";
import Header from "../components/Header";
import ChartBox from "../components/ChartBox";

class Water extends React.Component {
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
                    <Row className="rms-index-menu">
                        <Col xs={12} md={8}>
                            <ChartBox name="easy"/>
                        </Col>

                        <Col xs={12} md={4}>
                            Control Variables
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Water;
