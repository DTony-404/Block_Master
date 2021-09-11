import React, { Component } from 'react'
import {BoxContainerCards, ClasiCards} from '../style/style'
import { BiSearch } from "react-icons/bi";

export default class ListContainer extends Component {
    constructor(){
        super()
        this.state = {
            peli: [],
            filtros: []
        }
    }

    async componentDidMount(){
        this.obtenerApi()
    }
    async obtenerApi(){
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        this.setState({peli:data})
    }

    async filtro(){
        const pelis = []
        if(this.props.search !== ''){
            this.state.peli.map((filtra) => {
            const exp = new RegExp(this.props.search, 'i')
            if(exp.test(filtra.titulo)){
                pelis.unshift(filtra)         
                this.setState({
                    peli:pelis
                })
            }
            })
        }else {
           this.obtenerApi()
        }
    }
    
    render() {
        return (
            <BoxContainerCards>
                <button onClick={() => this.filtro()}>
                        <i>
                        <BiSearch />
                        </i>
                </button>  
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
