/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

import Star from '../Star/index';

class DetailInfo extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        const detailInfo = this.props.detailInfo;
        const detailInfoDesc = detailInfo.desc.split(';');
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={detailInfo.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{detailInfo.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={detailInfo.star}/>
                            <span className="price">￥{detailInfo.price}</span>
                        </div>
                        <p className="sub-title">{detailInfo.subTitle}</p>
                    </div>
                </div>
                {
                    detailInfoDesc.map((item, index) => {
                        return (
                            <p className="info-desc" key={index}>
                                {item}
                            </p>
                        );
                    })
                }
            </div>
        );
    }
}

export default DetailInfo;