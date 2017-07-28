/**
 * Created by liusiyao on 2017/7/17.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd/HomeAd';

class AD extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json();
        }).then(json => {
            const data = json;
            this.setState({
                data: data.length ? data : []
            });
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message);
            }
        });
    }

    render () {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data}/>
                    : '加载中...'
                }

            </div>
        );
    }
}

export default AD;