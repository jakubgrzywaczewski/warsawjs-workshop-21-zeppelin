import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { withStyles, CssBaseline } from '@material-ui/core';

import * as urls from './urls';
import reducer from './reducers';
import LoginPage from './LoginPage';
import Layout from './Layout';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const styles = {
    self: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    }
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <CssBaseline>
                        <Switch>
                            <Route path={urls.LOGIN} exact component={LoginPage} />
                            <Route path={urls.ROOT} component={Layout} />
                        </Switch>
                    </CssBaseline>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
