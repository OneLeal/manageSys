import React from 'react';
import { Row, Col, Button } from "antd";
import './index.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
import jsonpRequest from '@/utils/jsonp';

const { Component } = React;
const SYSTEM_NAME = 'antd 后台管理系统';
const DATA_FORMAT = 'YYYY-MM-DD hh:mm:ss';
const DATE = 'dddd';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            sysTime: moment().format(DATA_FORMAT) + ' ' + moment().format(DATE),
            weather_key: "5a3f99497ecc125dc3bda26e2e398d00",    // 高德天气 API
            city_code: "440300",                                // 城市编码
            weather_msg: { province: "", city: "", temperature: "", weather: "" }
        }
    }

    componentDidMount() {
        this.getWeather();
        this.setState({ user: '浅色星河' });
        setInterval(() => {
            this.setState({ sysTime: moment().format(DATA_FORMAT) + ' ' + moment().format(DATE) });
        }, 1000);
    }

    getWeather = () => {
        const { weather_key, city_code } = this.state;
        const url = "https://restapi.amap.com/v3/weather/weatherInfo?city=" + city_code + "&key=" + weather_key;
        jsonpRequest.jsonp({ url }).then(res => {
            if (res.lives && Array.isArray(res.lives) && res.lives.length > 0) {
                const { province, city, temperature, weather } = res.lives[0];
                this.setState({
                    weather_msg: { province, city, temperature, weather }
                });
            } else {
                throw new Error('获取天气失败');
            }
        }).catch(err => {
            // todo 改造成 antd 提示框
           console.warn(err);
        });
    };

    render() {
        const { user, sysTime } = this.state;
        const { province, city, temperature, weather } = this.state.weather_msg;
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
                    <Col span={'16'} className={'layout message'}>
                        <span className={'date msg'}>{ sysTime }</span>
                        <span className={'msg'}>{ province }</span>
                        <span className={'msg'}>{ city }</span>
                        <span className={'msg'}>{ temperature }°C</span>
                        <span className={'msg'}>{ weather }</span>
                    </Col>
                </Row>
            </div>
        );
    }
}