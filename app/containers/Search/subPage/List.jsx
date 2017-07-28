/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import List from '../../../components/List/index';
import LoadingMore from '../../../components/LoadingMore/index';

import {getSearchData} from '../../../fetch/search/search';

class SearchList extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        };
    }

    componentDidMount() {
        this.loadingFirstPage();
    }

    loadingFirstPage() {
        const props = this.props;
        const cityName = props.cityName;
        const keyword = props.keyword || '';
        const category = props.category;
        const result = getSearchData(0, cityName, category, keyword);
        this.resultHandler(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const props = this.props;
        const cityName = props.cityName;
        const keyword = props.keyword || '';
        const category = props.category;
        const page = this.state.page;
        const result = getSearchData(page, cityName, category, keyword);
        this.resultHandler(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    resultHandler(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json.data;
            const hasMore = json.hasMore;
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            });
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('城市模块获取数据报错, ', ex.message);
            }
        });
    }


    render () {
        return (
            <div>
                {
                    this.state.data.length
                    ? <List data={this.state.data}/>
                    : <div>加载中...</div>
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

export default SearchList;