import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from '../components/Login'
import Registro from '../components/Registro'
import App from '../App'
import Options from '../components/Options'

export default class AppRouter extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Registro} />
                    <Route exact path="/editar" component={Options} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        )
    }
}