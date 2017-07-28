/**
 * Created by liusiyao on 2017/7/19.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class SearchInput extends React.Component {
    constructor (...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        });
    }

    onChangeHandler(e) {
        this.setState({
            value: e.target.value
        });
    }

    onKeyUpHandler(e) {
        if (e.keyCode !== 13) {
            return;
        }
        this.props.enterHandler(e.target.value);
    }

    render () {
        let inputProps = {
            type: 'text',
            className: 'search-input',
            placeholder: '请输入关键字',
            value: this.state.value,
            onChange: this.onChangeHandler,
            onKeyUp: this.onKeyUpHandler
        };
        return (
            <input {...inputProps}/>
        );
    }
}

export default SearchInput;