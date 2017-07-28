/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class CurrentCity extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        );
    }
}

export default CurrentCity;