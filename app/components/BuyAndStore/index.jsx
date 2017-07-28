/**
 * Created by liusiyao on 2017/7/20.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class BuyAndStore extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    onStoreClickHandler() {
        this.props.storeHandler();
    }
    render () {
        let storeButton = {
            className: this.props.isStore ? 'selected' : '',
            onClick: this.onStoreClickHandler.bind(this)
        };
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    <button {...storeButton}>{this.props.isStore ? '已收藏' : '收藏'}</button>
                </div>
                <div className="item-container float-right">
                    <button>购买</button>
                </div>
            </div>
        );
    }
}

export default BuyAndStore;