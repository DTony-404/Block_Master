import React, { Component } from 'react'
import { VscChromeClose } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import {BoxDescription,
        BoxImg,
        BoxPuntuacionImg,
        BotonVerYa,
        BotonVerMas,
        ContenedorVide,
        BotonX
        } from '../style/style'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menuOptions: [],
          btnVerYa: false
        };
      }

    handleVer = () => {
        this.setState({
            btnVerYa: true
        })
    }
    handleDejarDeVer = () => {
        this.setState({
            btnVerYa: false
        })
    }

    render(){
        const {titulo, potster, trailer, descripcion, puntuacion, color} = this.props.descripcion
    return(
        <BoxDescription>
            <BoxImg>
            <img src={potster} alt="" />
            <BoxPuntuacionImg border = {color} >
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1631311329/BlockMaster/Vector_th1qzv.png" alt="" />
                    <span className="text-light">{puntuacion}</span>
            </BoxPuntuacionImg>
            </BoxImg>
            <BoxImg>
            <h1 className="text-light">{titulo}</h1>
            <span className="text-light">{descripcion}</span>
            <div className="d-flex flex-direction-row">
                <BotonVerYa className="m-3">
                    <FaPlay className="m-1" /> 
                    VER AHORA
                </BotonVerYa>
                <BotonVerMas onClick={this.handleVer} className="m-3">
                    <FiPlus className="m-1" />
                    VER DESPUÉS 
                    </BotonVerMas>
            </div>
            </BoxImg>
            {
                this.state.btnVerYa === true && (
                    <ContenedorVide>
                    <BotonX onClick={this.handleDejarDeVer}><VscChromeClose /></BotonX>
                    <iframe width="860" height="515" id="trailers" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ContenedorVide >
                )
            }
        </BoxDescription>
    )
}
}