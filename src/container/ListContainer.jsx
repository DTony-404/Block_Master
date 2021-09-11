import React, { Component } from 'react'
import { BoxContainerCards, ClasiCards, Contenedor, BotonX, BoxContentConteiner } from '../style/style'
import { BiSearch } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Description from '../components/Description'


export default class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripciones: 'none',
            descripcionesPeli: {},
            peli: [],
            filtros: [],
            scroll: 0
        }
    }

    async componentDidMount() {
        this.obtenerApi()
    }
    async obtenerApi() {
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        const mayor = [];
        const menor = []
        console.log(this.state.scroll)
        
        if (this.state.scroll < data.length) {
            data[this.state.scroll].pelis.map((mostrar) => {
                if (this.props.seccion === "mas") {
                    if (mostrar.puntuacion > 7) {
                        mayor.unshift(mostrar)
                        this.setState({ peli: mayor })
                    }
                } else if (this.props.seccion === 'menos') {
                    if (mostrar.puntuacion < 7) {
                        menor.unshift(mostrar)
                        this.setState({ peli: menor })
                    }
                } else if (this.props.seccion === 'todas') {
                    this.setState({ peli: data[this.state.scroll].pelis })
                }
            })
        }else{
            this.setState({scroll:0})
            this.obtenerApi()
        }
    }
  
    async filtro() {
        const pelis = []
        if (this.props.search !== '') {
            this.state.peli.map((filtra) => {
                const exp = new RegExp(this.props.search, 'i')
                if (exp.test(filtra.titulo)) {
                    pelis.unshift(filtra)
                    this.setState({
                        peli: pelis
                    })
                }
            })
        } else {
            this.obtenerApi()
        }
    }
    description(e) {
        this.setState({
            descripciones: 'flex',
            descripcionesPeli: e
        })
        this.mandarEstado(e)
    }
    mandarEstado(e) {
        if (this.state.descripcionesPeli !== {}) {
            return true
        } else {
            this.descripcion(e)
        }
    }
    borrarDescription() {
        this.setState({
            descripciones: 'none'
        })
    }
    scrollInfinite() {
        const suma = this.state.scroll + 1
        this.setState({
            scroll: suma
        })
        this.obtenerApi()
    }
    render() {
        return (
            <BoxContentConteiner>
                <BoxContainerCards className="mb-5">
                    <button onClick={() => this.filtro()}>
                        <i>
                            <BiSearch />
                        </i>
                    </button>
                    {
                        this.state.peli.map((movie) =>
                            <ClasiCards background={movie.potster} border={movie.color} onClick={() => (this.description(movie))}>
                                <div>
                                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                                    <span>{movie.puntuacion}</span>
                                </div>
                            </ClasiCards>
                        )
                    }
                    <button className="m-5" onClick={() => this.scrollInfinite()}>LOLAaaaaaaaaaaaaaaaaaa</button>
                    <h1 className="text-light">{this.state.scroll}</h1>
                    {
                        this.mandarEstado !== {} && (
                            <Contenedor descripciones={this.state.descripciones}>
                                <BotonX onClick={() => {this.borrarDescription(); this.obtenerApi()}}><VscChromeClose /></BotonX>
                                <Description key={this.state.descripcionesPeli.titulo} descripcion={this.state.descripcionesPeli} />
                            </Contenedor>
                        )
                    }
                    <mandarEstado />
                </BoxContainerCards>
            </BoxContentConteiner>
        )
    }
}
