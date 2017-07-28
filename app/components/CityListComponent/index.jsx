/**
 * Created by liusiyao on 2017/7/18.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class CityListComponent extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    onClickHandler(cityName) {
        this.props.onChangeHandler(cityName);
    }

    render () {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {
                        this.props.cityList.map((item, index) => {
                            return (
                               <li key={index}>
                                   <span onClick={this.onClickHandler.bind(this, item)}>
                                       {item}
                                   </span>
                               </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CityListComponent;