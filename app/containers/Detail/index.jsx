/**
 * Created by liusiyao on 2017/7/14.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../../components/CommonHeader/index';
import Info from './subPage/Info';
import Comments from './subPage/Comments';
import Buy from './subPage/Buy';

class Detail extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        const id = this.props.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comments id={id}/>
            </div>
        );
    }
}

export default Detail;
