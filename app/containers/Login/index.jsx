/**
 * Created by liusiyao on 2017/7/20.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {hashHistory} from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userInfoAction';

import LoginComponent from '../../components/LoginComponent/index';
import LoginHeader from '../../components/CommonHeader/index';


class Login extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checkingLogin: true
        };
    }

    componentDidMount() {
        this.userLoginCheck();
    }

    userLoginCheck() {
        if (this.props.userInfo.userName) {
            this.goUserPage();
        }
        else {
            this.setState({
                checkingLogin: false
            });
        }
    }

    goUserPage() {
        hashHistory.push('/user');
    }

    loginFn(userName) {
        const action = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        userInfo.userName = userName;
        action.update(userInfo);

        const params = this.props.params;
        const router = params.router;
        if (router) {
            hashHistory.push(router);
        }
        else {
            this.goUserPage();
        }
    }

    render () {
        return (
            <div>
                <LoginHeader title="登录"/>
                {
                    this.state.checkingLogin
                    ? <div>加载中...</div>
                    : <LoginComponent loginFn={this.loginFn.bind(this)}/>
                }
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
)(Login);