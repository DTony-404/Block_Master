import React, { Component } from 'react'
import {BoxContainerCards, ClasiCards} from '../style/style'
export default class ListContainer extends Component {
    constructor(){
        super()
        this.state = {
            peli: []
        }
    }

    async componentDidMount(){
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        this.setState({peli:data})
        console.log(this.state.peli)
    }
    render() {
        return (
            <BoxContainerCards>
                {
                this.state.peli.map((movie) => (
                    <ClasiCards background = {movie.potster}>
                        <h1>HOLA</h1>
                    </ClasiCards>
                ))
                }
            </BoxContainerCards>
        )
    }
}
