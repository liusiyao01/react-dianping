/**
 * Created by liusiyao on 2017/7/14.
 */
import {combineReducers} from 'redux';
import userInfo from './userInfo';
import store from './store';

export default combineReducers({
    userInfo,
    store
});