import React from 'react';
import { Row, Col, Button } from "antd";
import './index.less';
import moment from 'moment';
import 'moment/locale/zh-cn'

const { Component } = React;
const SYSTEM_NAME = 'antd 后台管理系统';
const DATA_FORMAT = 'YYYY-MM-DD hh:mm:ss';
const DATE = 'dddd';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', sysTime: moment().format(DATA_FORMAT) + ' ' + moment().format(DATE) }
    }

    componentDidMount() {
        this.setState({ user: '浅色星河' });
        setInterval(() => {
            this.setState({ sysTime: moment().format(DATA_FORMAT) + ' ' + moment().format(DATE) });
        }, 1000);
    }

    render() {
        const { user, sysTime } = this.state;
        return (
            <div className={'header'}>
                <Row className={'welcomeUser'} justify={'space-between'}>
                    <Col span={'8'} className={'layout systemName'}>{ SYSTEM_NAME }</Col>
                    <Col span={'8'} className={'layout'}>
                        <span className={'user'}>{ user }</span>
                        <span className={'loginOut'}>
                        <Button type={'link'}>退 出</Button>
                    </span>
                    </Col>
                </Row>

                <Row className={'breadCrumbs'} justify={'space-between'}>
                    <Col span={'8'} className={'layout breadCrumbsDetails'}>首页</Col>
                    <Col span={'8'} className={'layout message'}>
                        <span className={'date'}>{ sysTime }</span>
                        <span className={'weather'}>晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}