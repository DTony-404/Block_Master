import NavBarTop from './components/NavBar'
import SectionCarrusel from './components/SectionCarrusel'
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import {BoxComponents} from './style/style'
import search from './hook/search'
// import AppRouter from './router/AppRouter'

export default class App extends Component{
    render(){
        const {dato} = search
        console.log(dato)
        return(
            <BoxComponents>
                <NavBarTop />
                <SectionCarrusel />
            </BoxComponents>
        )
    }
}