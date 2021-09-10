// import { NavBarLocal } from "../style/style";
import {Link} from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { Container, Navbar } from "react-bootstrap";
import { BoxSearch, BoxBackgroun } from '../style/style'

import React, { Component } from 'react'

export default class NavBarTop extends Component{
    render(){
    return(
            <BoxBackgroun fixed="top">
                <Container>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <Navbar.Brand>
                        <a>Todas</a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a>
                        Más valoradas
                        </a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a>Menos valoradas</a>
                    </Navbar.Brand>

                    <BoxSearch>
                    <input placeholder="search" />
                    <button>
                        <i>
                        <BiSearch />
                        </i>
                    </button>    
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
    )}
}