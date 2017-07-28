/**
 * Created by liusiyao on 2017/7/20.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class LoginComponent extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userName: ''
        };
    }

    nameChangeHandler(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onClickHandler() {
        const userName = this.state.userName;
        this.props.loginFn(userName);
    }



    render () {
        let nameProps = {
            type: 'text',
            value: this.state.userName,
            placeholder: '请输入用户名',
            onChange: this.nameChangeHandler.bind(this),

        };

        let submitProps = {
            className: this.state.userName ? 'btn-login' : 'btn-no-name',
            onClick: this.onClickHandler.bind(this),
            disabled: !this.state.userName
        };
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input {...nameProps}/>
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button {...submitProps}>登录</button>
            </div>
        );
    }
}

export default LoginComponent;