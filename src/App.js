import React, {Component} from 'react';
import './css/App.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
