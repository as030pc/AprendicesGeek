import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouterH = () => {
    return (
        <Router>
            <div>
                {/* Debe */}
                <NavBar /> 

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                  

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
