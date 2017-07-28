/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class CommonHeader extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    onClickHandler() {
        window.history.back();
    }

    render () {
        let backButton = {
            className: "back-icon",
            onClick: this.onClickHandler
        };

        return (
            <div id="common-header">
                <span {...backButton}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default CommonHeader;