import React, { Component } from 'react'
import {BoxContainerCards, ClasiCards, Contenedor, BotonX} from '../style/style'
import { BiSearch } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Description from '../components/Description'

export default class ListContainer extends Component {
    constructor(){
        super()
        this.state = {
            descripciones: 'none',
            descripcionesPeli: {},
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

    description(e){
        this.setState({
            descripciones: 'flex',
            descripcionesPeli:e
        })
        console.log(this.state.descripcionesPeli)
    }
    borrarDescription(){
        this.setState({
            descripciones: 'none'
        })
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
                    <ClasiCards background = {movie.potster} border = {movie.color} onClick={() => (this.description(movie))}>
                        <div>
                            <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                            <span>{movie.puntuacion}</span>
                        </div>
                    </ClasiCards>
                )
                }
                <Contenedor descripciones={this.state.descripciones}>
                    <BotonX onClick={() => this.borrarDescription()}><VscChromeClose /></BotonX>

                        <Description descripcion={this.state.descripcionesPeli}  />
                    {/* {
                        
                        this.state.descripcionesPeli.find((movie,index) => {
                            return(
                                <Description
                                    key={`${movie}-${index}`}
                                    movies={movie}
                                />
                            )
                        })
                    }*/}
                </Contenedor>
            </BoxContainerCards>
        )
    }
}
