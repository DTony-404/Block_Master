// import { NavBarLocal } from "../style/style";
import {Link} from 'react-router-dom'
import { Container, Navbar } from "react-bootstrap";
import { BoxSearch, BoxBackgroun } from '../style/style'
import ListContainer from './ListContainer'
import SectionCarrusel from '../components/SectionCarrusel'

import React, { Component } from 'react'

export default class NavBarTop extends Component{
    constructor(){
        super()
        this.state = {
            "search": ''
        }
    }

    handleChange = async ({target}) => {
        await this.setState({
            search: target.value
        })
    }
    render(){
    return(
            <div>
            <BoxBackgroun>
                <Container>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <Navbar.Brand>
                        <a href="/">Todas</a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a href="/">
                        Más valoradas
                        </a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a href="/">Menos valoradas</a>
                    </Navbar.Brand>

                    <BoxSearch>
                    <input placeholder="search" onChange={this.handleChange} />
                      
                    </BoxSearch>

                    <Navbar.Brand>
                    <Link
                        to="/login"
                    >
                        Login
                    </Link>
                    </Navbar.Brand>
                </Container>
            </BoxBackgroun>

            <SectionCarrusel />

            <ListContainer
                key={"lola"}
                search={this.state.search}
            />
         </div>
    )}
}