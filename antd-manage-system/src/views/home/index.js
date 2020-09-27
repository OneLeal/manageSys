import React from 'react';
const { Component } = React;
import './index.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'pages home'}>
                home
            </div>
        );
    }
}