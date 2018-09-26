import React from 'react';
import {Router,Route,hashHistory} from 'react-router';
import Header from './components/home/index';
import Counter from './components/couter/counter';

const Routes = () =>{
    return (
        <Router path="/" history={hashHistory}>
            <Route path="/" component={Counter}/>
      </Router>
    )
}
export default Routes;