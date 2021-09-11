import React, { Component } from 'react'
import {BoxContainerCards, ClasiCards} from '../style/style'
export default class ListContainer extends Component {
    constructor(){
        super()
        this.state = {
            peli: [],
            filtros: []
        }
    }

    async componentDidMount(){
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        this.setState({peli:data})
    }
    filtro(){
        const nuevo = []
            this.state.peli.map((filtra) => {
            const exp = /da/i;
            if(exp.test(filtra.titulo)){
                nuevo.unshift(filtra)         
                this.setState({
                    ...this.state.filtros,
                    filtros:{...this.state.filtros,nuevo}
                })
            }
        })
    }

    filtrar = (evaluar, filtra) =>{
        const results = filtra.filter(word => word.titulo === evaluar)
        console.log(results)
    }

    render() {
        return (
            <BoxContainerCards>
                <button onClick={() => this.filtro()}>LOLA</button>

                {
                this.state.peli.map((movie) => 
                    <ClasiCards background = {movie.potster} border = {movie.color}>
                        <div>
                            <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                            <span>{movie.puntuacion}</span>
                        </div>
                    </ClasiCards>
                )
                }

            </BoxContainerCards>
        )
    }
}
