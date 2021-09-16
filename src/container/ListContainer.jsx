import React, { Component } from 'react'
import { BoxContainerCards, ClasiCards, Contenedor, BotonX, BoxContentConteiner, BoxTexto, BoxVerMas, InputForm, ButtonFrom} from '../style/style'
import { BiSearch, BiPlus } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Description from '../components/Description'
import axios from 'axios'
import uuid from 'react-uuid'
export default class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descripciones: 'none',
            descripcionesPeli: {},
            peli: [],
            filtros: [],
            scroll: 0,
            nameSection: "Todas las peliculas",
            usuario: [],
            encontro: true,
            create: false,
            formNewPeli: {
                titulo: '',
                potster: '',
                puntuacion: '',
                trailer: '',
                descripcion: '',
                color: '',
                fecha: ''
            } 

        }
    }
    
    async componentDidMount() {
        this.obtenerApi()
    }
    async obtenerApi() {
        const url = "https://api-block-master.herokuapp.com/Peliculas/"
        const res = await fetch(url)
        const data = await res.json()
        if (this.state.scroll < data.length) {
            data[this.state.scroll].pelis.map((mostrar) => {
                if (this.props.seccion === "mas") {
                    if (mostrar.puntuacion > 7) {
                        this.setState({ peli: this.state.peli.concat(mostrar), nameSection: "Peliculas mas valoradas"})
                    }
                } else if (this.props.seccion === "menos") {
                    if (mostrar.puntuacion < 7) {
                        this.setState({ peli: this.state.peli.concat(mostrar), nameSection: "Peliculas menos valoradas" })
                    }
                } else if (this.props.seccion === "todas") {
                    if(mostrar.puntuacion > 0){
                        this.setState({ peli: this.state.peli.concat(mostrar) })
                }
                }

            })

        }else{

            this.setState({scroll:0})
            this.obtenerApi()

        }
    }
  
    async filtro() {
        const pelis = []
        this.setState({encontro:true})
        if (this.props.search !== '') {
            this.state.peli.map((filtra) => {
                const exp = new RegExp(this.props.search, 'i')
                console.log(exp.test(filtra.titulo))
                if (exp.test(filtra.titulo)) {
                    pelis.unshift(filtra)
                    this.setState({
                        peli: pelis,
                    })
                }else{
                    this.setState({encontro:false})
                }
            })
        } else {
            this.obtenerApi()
            this.setState({encontro:true})
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
    
    async createPeli(){
        this.setState({
            create:true
        })
    }

    async cerrarCreate(){
        this.setState({
            create:false
        })
    }
    handleCreate = async ({target}) => {
        await this.setState({
            formNewPeli:{
                ...this.state.formNewPeli, 
                [target.name]: target.value
            }
        })
            
    }
    handleSubirPeli = () => {
        this.setState({
            peli:this.state.peli.concat(this.state.formNewPeli)
        })
        //this.handlePost()
    } 
    //handlePost = async () => {
       //axios.post("https://api-block-master.herokuapp.com/Peliculas/1"
            //, this.state.peli) 
    //}
    render() {
        return (
            <BoxContentConteiner>
                <BoxTexto>
                    <h1 className="p-5 text-left text-light">{this.state.nameSection}</h1>
                </BoxTexto>
                <BoxContainerCards className="mb-5">
                    <button onClick={() => this.filtro()}>
                        <i>
                            <BiSearch />
                        </i>
                    </button>
                    
                    {
                        this.state.encontro === true &&(
                        this.state.peli.map((movie) =>
                            <ClasiCards background={movie.potster} border={movie.color} onClick={() => (this.description(movie))}>
                                <div>
                                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                                    <span>{movie.puntuacion}</span>
                                </div>
                            </ClasiCards>
                        ))
                    }
                    {
                        this.state.encontro === true &&
                            (
                                <div className="d-flex">
                             <BoxVerMas type="button" className="text-center justify-content-center align-items-center"  onClick={() => this.scrollInfinite()}>
                                <h1 className="p-5 text-center">Ver mas</h1>
                                <h1 ><BiPlus /></h1>
                            </BoxVerMas>
                                    <BoxVerMas onClick={() => this.createPeli()} type="button" className="text-center justify-content-center align-items-center">
                                <h4 className="p-1 m-5 text-center">Agregar Peliculas</h4>
                                <h1 ><BiPlus /></h1>
                            </BoxVerMas>
                                </div>
                        )
                    }

                    {
                        this.state.encontro !== true &&(
                            <BoxContentConteiner>
                                <div>
                                <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631506897/BlockMaster/f_zfhknh.png" alt="" />
                                <h3 className="text-light text-center">No se encontraron resultados para "{this.props.search}" </h3>
                                </div>
                            </BoxContentConteiner>
                        )
                    }
                    {
                        this.state.create ===true && ( 
                            <Contenedor className="d-flex flex-column justify-content-center align-items-center align-content-center">
                                <h3 className="text-light mb-3"> Llene el formulario para subir su pelicula </h3> 
                                <BotonX onClick={() => this.cerrarCreate()}><VscChromeClose /></BotonX>
                                <InputForm placeholder="nombre de la pelicula" onChange={this.handleCreate} name="titulo" />
                                <InputForm placeholder="Description" onChange={ this.handleCreate} name="descripcion"/> 
                                <InputForm placeholder="fecha-hora" onChange={this.handleCreate} name="fecha"/> 
                                <InputForm placeholder="puntuacion" onChange={this.handleCreate} type="number" name="puntuacion"/> 
                                <InputForm placeholder="Color" onChange={this.handleCreate} name="color"/>
                                <InputForm placeholder="potster" onChange={this.handleCreate} name="potster"/>
                                <InputForm placeholder="trailer iFrame" onChange={this.handleCreate} name="trailer"/>
                                <ButtonFrom onClick={() => this.handleSubirPeli()}>Subir Pelicula</ButtonFrom>  

                            </Contenedor>
                        )
                    } 

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
