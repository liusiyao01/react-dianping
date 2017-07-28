/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

const STAR_ARRAY = [1, 2, 3, 4, 5];

class Star extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render () {
        let star = this.props.star || 0;
        if (star > 5) {
            star = star % 5;
        }
        return (
            <div className="star-container">
                {
                    STAR_ARRAY.map((item, index) => {
                        const lightClass = star >= item ? ' light' : '';
                        return <i key={index} className={'icon-star' + lightClass}></i>;
                    })
                }
            </div>
        );
    }
}

export default Star;