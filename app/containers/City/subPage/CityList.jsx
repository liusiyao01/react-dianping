/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

import CityListComponent from '../../../components/CityListComponent/index';

import {getCity} from '../../../fetch/city/city';

import { CITYNAME } from '../../../config/localStoreKeys';
import localStore from '../../../util/localStore';


class CityList extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            cityList: []
        };
    }

    componentDidMount() {
        const result = getCity();
        result.then(res => {
            return res.json();
        })
        .then(json => {
            const data = json;
            this.setState({
                cityList: data
            });
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('城市模块获取数据报错, ', ex.message);
            }
        });
    }

    changeCity(newCity) {
        if (newCity == null) {
            return;
        }
        // 修改 redux
        const userInfo = this.props.userInfo;
        userInfo.cityName = newCity;
        this.props.userInfoActions.update(userInfo);

        // 修改localStore
        localStore.setItem(CITYNAME, newCity);

        // 跳转回首页
        hashHistory.push('/');

    }

    render () {
        return (
            <div>
                <CityListComponent cityList={this.state.cityList} onChangeHandler={this.changeCity.bind(this)}/>
            </div>
        );
    }
}

export default CityList;