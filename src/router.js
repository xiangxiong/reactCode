import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Header from './components/home/index';

const Routes = () =>{
    return (
        <Router>
            <Route path="/" component={Header}/>
      </Router>
    )
}

export default Routes;