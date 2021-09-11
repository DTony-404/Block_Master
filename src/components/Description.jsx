import React, { Component } from 'react'
import {BoxDescription, BoxImg, BoxPuntuacionImg, BotonVerYa} from '../style/style'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menuOptions: [],
        };
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
            <div><BotonVerYa className="text-center">LOLA</BotonVerYa></div>
            </BoxImg>
            {/* <iframe width="560" height="315" id="trailers" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </BoxDescription>
    )
}
}