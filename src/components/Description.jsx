import React, { Component } from 'react'
import {BoxDescription} from '../style/style'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menuOptions: [],
        };
      }
    render(){
        console.log(this.props.descripcion)        
    return(
        <div>

        </div>
    )
}
}