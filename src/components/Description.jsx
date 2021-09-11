import React, { Component } from 'react'
import {BoxDescription} from '../style/style'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menuOptions: [],
        };
      }

    async componentDidMount(){
        console.log(this.props.descripcionesPeli)
        if(this.props.descripcionesPeli !== {}){
            console.log("nopasonimierda")
        }else{
            this.setState({
                menuOptions: this.props.descripcionesPeli
            })
        }
    }
    render(){
        
    return(
        <BoxDescription>
            <h2>{this.state.menuOptions}</h2>
        </BoxDescription>
    )
}
}