/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DetailInfo from '../../../components/DetailInfo/index';

import {getDetailInfo} from '../../../fetch/detail/detail';

class Info extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: null
        };
    }


    componentDidMount() {
        const id = this.props.id;
        const result = getDetailInfo(id);
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                info: json
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
            <div>
                {
                    this.state.info
                    ? <DetailInfo detailInfo={this.state.info}/>
                    : <div>加载中...</div>
                }
            </div>
        );
    }
}

export default Info;