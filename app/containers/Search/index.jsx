/**
 * Created by liusiyao on 2017/7/14.
 */

import React from 'react';
import {connect} from 'react-redux';

import SearchHeader from '../../components/SearchHeader/index';
import SearchList from './subPage/List';


class Search extends React.Component {
    render () {
        const params = this.props.params;
        let searchListProps = {
            cityName: this.props.userInfo.cityName,
            keyword: params.keyword,
            category: params.type
        };
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList {...searchListProps}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
