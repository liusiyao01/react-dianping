/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class LoadingMore extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const loadingFn = this.props.loadingFn;
        let timeoutId;
        let wrapper = this.refs.wrapper;
        let callback = function () {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                loadingFn();
            }
        };
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);
        }, false);
    }

    onLoadingMoreHandler() {
        this.props.loadingFn();
    }

    render () {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.onLoadingMoreHandler.bind(this)}>加载更多</span>
                }
            </div>
        );
    }
}

export default LoadingMore;