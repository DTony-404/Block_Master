import NavBarTop from './container/ConteinerNavBar'
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import {BoxComponents} from './style/style'
// import search from './hook/search'
// import AppRouter from './router/AppRouter'

export default class App extends Component{
    render(){
        return(
            <BoxComponents>
                <NavBarTop />
            </BoxComponents>
        )
    }
}