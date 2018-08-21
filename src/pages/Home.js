import React from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import ServiceButton from '../components/ServiceButton';
import Header from "../components/Header";
import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header title="Resource Management Service"/>
                <Grid>
                    <Row className="rms-index-menu">
                        <Col xs={12} md={4}>
                            <ServiceButton url='/water-consumption' name="Water Consumption"
                                           glyphSlug="tint" glyphColor="#2695d6"/>
                        </Col>

                        <Col xs={12} md={4}>
                            <ServiceButton url='/gorenje-fridge' name="Gorenje Refrigerator"
                                           glyphSlug="leaf" glyphColor="#17b52a"/>
                        </Col>

                        <Col xs={12} md={4}>
                            <ServiceButton url='/power-consumption' name="Power Consumption"
                                           glyphSlug="flash" glyphColor="#e2893c"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
