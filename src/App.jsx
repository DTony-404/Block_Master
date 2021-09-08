import NavBarTop from './components/NavBar'
import SectionCarrusel from './components/SectionCarrusel'
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import {BoxComponents} from './style/style'
// import AppRouter from './router/AppRouter'

export default class App extends Component{
    render(){
        return(
            <BoxComponents>
                <NavBarTop />
                <SectionCarrusel />
            </BoxComponents>
        )
    }
}