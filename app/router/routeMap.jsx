/**
 * Created by liusiyao on 2017/6/11.
 */

import React from 'react';
import {Router, Route, IndexRoute} from  'react-router';

// components
import App from '../containers/index';
import Detail from '../containers/Detail/index';
import City from '../containers/City/index';
import Search from '../containers/Search/index';
import Home from '../containers/Home/index';
import User from '../containers/User/index';
import Login from '../containers/Login/index';
import NotFound from '../containers/404';


class RouteMap extends React.Component {
  render() {
      return (
        <Router history={this.props.history}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='/city' component={City}/>
                <Route path='/search/:type(/:keyword)' component={Search}/>
                <Route path='/user' component={User}/>
                <Route path='/detail/:id' component={Detail}/>
                <Route path='/Login(/:router)' component={Login}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
      );
  }
}

export default RouteMap;
