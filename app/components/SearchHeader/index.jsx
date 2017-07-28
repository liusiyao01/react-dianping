/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import './style.less';

import SearchInput from '../SearchInput/index';

class SearchHeader extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.enterPress = this.enterPress.bind(this);
    }

    enterPress(value) {
        hashHistory.push('/search/all' + encodeURIComponent(value));
    }

    onClickHandler() {
        window.history.back();
    }

    render () {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.onClickHandler.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput enterHandler={this.enterPress} value={this.props.keyword || ''}/>
                </div>
            </div>
        );
    }
}

export default SearchHeader;