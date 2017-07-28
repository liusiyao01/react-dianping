/**
 * Created by liusiyao on 2017/7/20.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {hashHistory} from 'react-router';
import * as storeActionsFromOtherFile from '../../../actions/storeAction';

import BuyAndStore from '../../../components/BuyAndStore/index';

class Buy extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        };
    }

    componentDidMount() {
        this.checkIsStore();
    }

    checkIsStore() {

        const id = this.props.id;
        const store = this.props.store;
        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                });
                return false;
            }
        });

    }

    loginCheck() {
        const id = this.props.id;
        const userInfo = this.props.userInfo;
        if (!userInfo.userName) {
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    }

    buyHandler() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }

        // 购买后期在做

        hashHistory.push('/user');
    }

    storeHandler() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if (this.state.isStore) {
            storeActions.rm({id: id});
        }
        else {
            storeActions.add({id: id});
        }

        this.setState({
            isStore: !this.state.isStore
        });

    }


    render () {
        let buyAndStoreProps = {
            buyHandler: this.buyHandler.bind(this),
            storeHandler: this.storeHandler.bind(this),
            isStore: this.state.isStore
        };
        return (
            <div>
                <BuyAndStore {...buyAndStoreProps}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state.store,
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);