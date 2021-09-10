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
                        <div>
                            <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                            <span>{movie.puntuacion}</span>
                        </div>
                    </ClasiCards>
                ))
                }
            </BoxContainerCards>
        )
    }
}
