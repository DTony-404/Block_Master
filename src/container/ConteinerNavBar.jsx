// import { NavBarLocal } from "../style/style";
import {Link} from 'react-router-dom'
import { Container, Navbar } from "react-bootstrap";
import { BoxSearch, BoxBackgroun, BottonInicio } from '../style/style'
import ListContainer from './ListContainer'
import SectionCarrusel from '../components/SectionCarrusel'

import React, { Component } from 'react'

export default class NavBarTop extends Component{
    constructor(){
        super()
        this.state = {
            "search": '',
            "usuario": false,
            "peliculas": 'todas',
        }
    }
    
    handleChange = async ({target}) => {
        await this.setState({
            search: target.value
        })
    }
    handleTodas = async () => {
        await this.setState({
            peliculas: 'todas'
        })
    }

    handleMasVistas = async () => {
        await this.setState({
            peliculas: 'mas'
        })
    }
    handleMenosVistas = async () => {
        await this.setState({
            peliculas: 'menos'
        })
    }

    render(){
    return(
            <div>
            <BoxBackgroun>
                <Container>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <Navbar.Brand>
                        <p className="text-light" onClick={this.handleTodas}>Todas</p>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <p className="text-light" onClick={this.handleMasVistas}>
                        Más valoradas
                        </p>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <p className="text-light" onClick={this.handleMenosVistas}>Menos valoradas</p>
                    </Navbar.Brand>

                    <BoxSearch>
                    <input placeholder="Busca tu pelicula favorita" onChange={this.handleChange} />
                      
                    </BoxSearch>

                    <Navbar.Brand>
                    <Link
                                to="/login"
                            >
                                <BottonInicio>c</BottonInicio>
                    </Link>
                    {/* {
                        this.User.email === '' && (
                            <Link
                                to="/login"
                            >
                                <BottonInicio>c</BottonInicio>
                            </Link>
                        )
                    }
                    {
                        this.User.email !== '' && (
                            <Link
                            to="/editar"
                        >
                            <BottonInicio>L</BottonInicio>
                        </Link>
                        )
                    } */}
                    </Navbar.Brand>
                </Container>
            </BoxBackgroun>

            <SectionCarrusel />

            {
                this.state.peliculas === 'todas' &&(
                    <ListContainer
                        search={this.state.search}
                        seccion={this.state.peliculas}
                    />
                )
            }
            {
                this.state.peliculas === 'mas' &&(
                    <ListContainer
                    search={this.state.search}
                    seccion={this.state.peliculas}
                />
                )
            }
            {
                this.state.peliculas === 'menos' &&(
                    <ListContainer
                    search={this.state.search}
                    seccion={this.state.peliculas}
                />
                )
            }

         </div>
    )}
}