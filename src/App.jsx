import NavBarTop from './components/NavBar'
import SectionCarrusel from './components/SectionCarrusel'
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import {BoxComponents} from './style/style'
// import AppRouter from './router/AppRouter'

export default class App extends Component{
    render(){
        // const lola = "marvel"
        // const exp =  /v?/
        // const exp2 = exp.exec(lola)
        // console.log(exp2.input)

        // fetch("https://api-block-master.herokuapp.com/Peliculas/").then((resp) => resp.json()).then((data) => {console.log(data[lola])})

        return(
            <BoxComponents>
                <NavBarTop />
                <SectionCarrusel />
            </BoxComponents>
        )
    }
}