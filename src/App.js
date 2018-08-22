import './css/App.css';
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Water from "./pages/Water";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/water-consumption" exact component={Water} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
