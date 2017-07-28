/**
 * Created by liusiyao on 2017/7/14.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/HomeHeader/index';
import Category from '../../components/Category/index';
import {bindActionCreators} from  'redux';
import {connect} from 'react-redux';
import AD from './subPage/AD';
import List from './subPage/List';

class Home extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}></div>
                <AD/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //userInfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
