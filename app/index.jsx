/**
 * Created by liusiyao on 2017/5/11.
 */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {hashHistory} from 'react-router';
import configureStore from './store/configureStore';

import './static/css/common.less';
import './static/css/font.css';

import RouteMap from './router/routeMap';

let store = configureStore();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
