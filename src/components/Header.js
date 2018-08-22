import React from 'react';
import PropTypes from 'prop-types';
import {Col, Glyphicon, Grid, Row} from "react-bootstrap";
import '../css/Header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <div className="nav-menu">
                <Grid>
                    <Row>
                        <Col className="home-btn" xs={12} md={2}>
                            <Link to="/">
                                <Glyphicon glyph="home"/>
                            </Link>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="page-title">
                                {this.props.title}
                            </div>
                        </Col>
                        <Col className="user-btn" xs={12} md={2}>
                            <Link to="#">
                                <Glyphicon glyph="user"/>
                            </Link>
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
