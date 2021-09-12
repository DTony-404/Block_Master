import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, InputForm, ButtonFrom, BoxFormContent} from '../style/style'
import axios from 'axios';

const url = "https://api-block-master.herokuapp.com/usuario/"

export default class EditAndDelete extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            form: {
                nombre: '',
                username: '',
                password: '',
                id: ''
            }
        }
    }
    handleChange = async(e) => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    peticionGet = () => {
        axios.get(url)
        .then(response => {
            this.setState({data:response.data});
            console.log(this.state.data)
            const filtro = this.state.data.find(filtra => filtra.username === this.state.form.username)
            localStorage.setItem('usuarioPut', JSON.stringify(filtro))
        })
        .catch(error => {console.log(error.message)})
       
    }

    async peticionPutDefinitiva(){
        const user = JSON.parse(localStorage.getItem('usuarioPut'))
        console.log(this.state.form.id)
        await axios.put(url+user.id,this.state.form)
        .then(response=>{
            localStorage.setItem('usuarioPut', JSON.stringify(this.state.form))
        })
        .catch(error => console.log(error.message))
       
    }
    
    render() {
        const {form} = this.state;
        return (
            <BoxForm>
                <BoxFormContent>
                    <InputForm type="text" name="nombre" onChange={this.handleChange} value={form?form.userName:''} />
                    <InputForm type="text" name="username" onChange={this.handleChange} value={form?form.userName:''} />
                    <InputForm type="text" name="password" onChange={this.handleChange} value={form?form.passWord:''} />

                    <div>
                    <ButtonFrom className="m-2" onClick={() => this.peticionGet()}>Buscar Usuario</ButtonFrom>
                    <ButtonFrom className="m-2" onClick={() => this.peticionPutDefinitiva()}>Editar Usuario</ButtonFrom>
                    <ButtonFrom className="m-2">Borrar Usuario</ButtonFrom>
                    </div>
                    <Link
                    className="mt-3"
                    to="/"
                    >
                        Ir al inicio
                    </Link>
                    <Link 
                    to="/editar"
                    >
                        Volver a opciones
                    </Link>
                    <Link
                    to="/login"
                    >
                        Volver a inicio de seccion
                    </Link>
                </BoxFormContent>
            </BoxForm>
        )
    }
}
