/**
 * Created by liusiyao on 2017/5/14.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore';
import CITYNAME from '../config/localStoreKeys';
import {bindActionCreators} from  'redux';
import {connect} from 'react-redux';
import * as userInfoActionFromOtherFile from '../actions/userInfoAction';

class App extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone : false
        };
    }

    componentDidMount() {
        // 从localstore里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName === null) {
            cityName = '北京';
        }

        this.props.userInfoActions.update({
            cityName
        });

        this.setState({
            initDone: true
        });
    }
    render () {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>加载中...</div>

                }
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
