import React from 'react';
const { Component } = React;
import './index.less';
import { Button } from "antd";

const LINK_GITHUB = 'https://github.com/OneLeal/algorithmPractice';
const LINK_LABEL = '想学习更多？ 算法小练习:';
const AUTHOR = '@ 浅色星河';
export default class FooterComponent extends Component {
    render() {
        return (
            <div className={'footer'}>
                <span className={'linkName'}>{ LINK_LABEL }</span>
                <Button type={'link'} href={ LINK_GITHUB } target={'_blank'}>{ LINK_GITHUB }</Button>
                <span>{ AUTHOR }</span>
            </div>
        );
    }
}