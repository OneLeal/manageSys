import React from 'react';
import { Row, Col } from "antd";
import HeaderComponent from '@/components/header';
import FooterComponent from '@/components/footer';
import NavLeftComponent from '@/components/navLeft';

const { Component } = React;

export default class Admin extends Component {
    render() {
        return (
            <Row className={'wrap'}>
                <Col span={'4'} className={'nav'}>
                    <NavLeftComponent />
                </Col>

                <Col span={'20'} className={'container'}>
                    <HeaderComponent />

                    <Row className={'main'}>
                        content
                    </Row>

                    <FooterComponent />
                </Col>
            </Row>
        );
    }
}