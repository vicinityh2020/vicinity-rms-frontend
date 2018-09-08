import React from 'react';
import {Breadcrumb, Col, Grid, Row} from "react-bootstrap";
import Header from "../components/Header";
import ChartBox from "../components/ChartBox";
import AlarmTable from "../components/AlarmTable";

class Power extends React.Component {

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
                        <Col xs={12} md={8}>
                            <ChartBox units="kwH" data={[]} labels={[]}/>
                        </Col>

                        <Col xs={12} md={4}>
                            <AlarmTable resource="power"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Power;
