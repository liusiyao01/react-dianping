/**
 * Created by liusiyao on 2017/7/17.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getListData} from  '../../../fetch/home/home';
import ListComponent from '../../../components/List/index';
import LoadingMore from '../../../components/LoadingMore/index';

import './style.less';

class List extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,
            page: 1
        };
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandler(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
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
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore,
                data: this.state.data.concat(data)
            });

        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message);
            }
        });
    }

    render () {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadingMore isLoadingMore={this.state.isLoadingMore}                             loadingFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }

            </div>
        );
    }
}

export default List;