import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, InputForm, ButtonFrom, BoxFormContent} from '../style/style'
import axios from 'axios';
import swal from 'sweetalert';

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
            const filtro = this.state.data.find(filtra => filtra.username === this.state.form.username)
            localStorage.setItem('usuarioPut', JSON.stringify(filtro))
            if(filtro !== undefined){
            console.log(filtro)
                swal("!Muy Bien¡", "Usuario encontrado", "success")
            }else{
                swal("Error", "Usuario No encontrado", "error")
            }
        })
        .catch(error => {console.log(error.message)})
       
    }

    async peticionPutDefinitiva(){
        const user = JSON.parse(localStorage.getItem('usuarioPut'))
        await axios.put(url+user.id,this.state.form)
        .then(response=>{
            swal("!Muy Bien¡", "Su usuario a sido editado", "success")
            localStorage.setItem('usuarioDelete', JSON.stringify(this.state.form))
        })
        .catch(error => console.log(error.message))
    }
    
    async peticionDelete() {
        const user = JSON.parse(localStorage.getItem('usuarioPut'))
        await axios.delete(url+user.id).then(response => {swal("Hasta la Proxima", "Su usuario a sido Eliminado", "warning"); window.location.reload(true)}).catch(error => {console.log(error.message)})
    }

    render() {
        const {form} = this.state;
        return (
            <BoxForm>
                <BoxFormContent>
                    <h1 className="text-light">Edita tu perfil</h1>
                    <InputForm type="text" placeholder="Nombre" name="nombre" onChange={this.handleChange} value={form?form.userName:''} />
                    <InputForm type="text" placeholder="Nombre de usuario" name="username" onChange={this.handleChange} value={form?form.userName:''} />
                    <InputForm type="text" placeholder="Contraseña" name="password" onChange={this.handleChange} value={form?form.passWord:''} />

                    <ButtonFrom className="m-2" onClick={() => this.peticionGet()}>Buscar Usuario</ButtonFrom>
                    <ButtonFrom className="m-2" onClick={() => this.peticionPutDefinitiva()}>Editar Usuario</ButtonFrom>
                    <ButtonFrom className="m-2" onClick={() => this.peticionDelete()}>Borrar Usuario</ButtonFrom>
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
