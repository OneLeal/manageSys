import React from 'react';
import menuList from '@/config/menu';
import { Menu, Row, Col } from 'antd';
import './index.less';

const { SubMenu, Item } = Menu;
const { Component } = React;
const TITLE = 'antd MS';

export default class NavLeftComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: null };
    }

    // 递归渲染菜单
    renderMenu = (menu) => {
        if (!Array.isArray(menu)) {
            console.warn('menu error !');
            return;
        }

        return menu.map(item => {
            if (item.hasOwnProperty('children')) {
                return (
                    <SubMenu key={item.path} title={item.label}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                );
            }

            return (<Item key={item.path}>{ item.label }</Item>);
        });
    };

    componentDidMount() {
        const menu = this.renderMenu(menuList);
        this.setState({ menu });
    }

    render() {
        return (
            <Row>
                <Col span={'24'}>
                    <Row className={'menuHead'}>
                        <Col span={'10'} className={'logo'}>
                            <img src="/assets/logo-ant.svg" alt=""/>
                        </Col>
                        
                        <Col span={'14'} className={'title'}>{ TITLE }</Col>
                    </Row>

                    <Menu theme={'dark'}>{ this.state.menu }</Menu>
                </Col>
            </Row>
        );
    }
}