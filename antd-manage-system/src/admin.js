import React from 'react';
import { Row, Col } from "antd";
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import NavLeftComponent from './components/navLeft';

const { Component } = React;

export default class Admin extends Component {
    render() {
        return (
            <Row>
                <Col span={'4'} >
                    <NavLeftComponent />
                </Col>

                <Col span={'20'} >
                    <HeaderComponent />
                    <FooterComponent />
                </Col>
            </Row>
        );
    }
}