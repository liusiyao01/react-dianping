/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../../actions/userInfoAction';

import CityHeader from '../../components/CommonHeader/index';
import CurrentCity from '../../components/CurrentCity/index';
import CityListPage from './subPage/CityList';

class City extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div>
                <CityHeader title='选择城市'/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityListPage userInfoActions={this.props.userInfoActions} userInfo={this.props.userInfo}/>
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
