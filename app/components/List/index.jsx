/**
 * Created by liusiyao on 2017/7/17.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './item/Item';

import './style.less';


class ListComponent extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        return (
            <div className="list-container">
                {
                    this.props.data.map((item, index) => {
                        return (<Item key={index} data={item}/>);
                    })
                }
            </div>
        );
    }
}

export default ListComponent;