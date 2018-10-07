import './css/App.css';
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Water from './pages/Water';
import Power from './pages/Power';
import Gorenje from "./pages/Gorenje";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/water-consumption" exact component={Water} />
                    <Route path="/power-consumption" exact component={Power} />
                    <Route path="/gorenje-fridge" exact component={Gorenje} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
