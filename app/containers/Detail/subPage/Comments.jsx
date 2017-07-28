/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getDetailComments} from '../../../fetch/detail/detail';

import CommentsList from '../../../components/CommentsList/index';
import LoadingMore from '../../../components/LoadingMore/index';

import './style.less';

class Comments extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            page: 1,
            isLoadingMore: false,
            hasMore: false
        };
    }

    componentDidMount() {
        this.loadFirstPage();
    }

    loadFirstPage() {
        const id = this.props.id;
        const result = getDetailComments(0, id);
        this.resultHandler(result);
    }
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const id = this.props.id;
        const page = this.state.page;
        const result = getDetailComments(page, id);
        this.resultHandler(result);
        this.setState({
            isLoadingMore: false,
            page: page + 1
        });
    }

    resultHandler(result) {

        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore
            });
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('商品详情模块获取数据报错, ', ex.message);
            }
        });
    }

    render () {
        return (
            <div className="detail-comment-subpage">
                {
                    this.state.data.length
                    ? <CommentsList data={this.state.data}/>
                    : <div>加载中</div>
                }
                {
                    this.state.hasMore
                    ? <LoadingMore isLoadingMore={this.state.isLoadingMore} loadingFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }
            </div>
        );
    }
}

export default Comments;