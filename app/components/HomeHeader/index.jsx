/**
 * Created by liusiyao on 2017/7/14.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import './style.less';

import SearchInput from '../SearchInput/index';

class HomeHeader extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    enterPress(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }

    render () {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        {this.props.cityName}
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/Login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput enterHandler={this.enterPress.bind(this)} value=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
