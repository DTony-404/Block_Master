import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, InputForm, ButtonFrom, BoxFormContent} from '../style/style'
import swal from 'sweetalert';

const baseUrl = "https://api-block-master.herokuapp.com/usuario"

export default class Registro extends Component {
    constructor(){
        super();
        this.state = {
            form: {
                id: '',
                nombre: '',
                username: '',
                password: ''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    handleSubmit = async e => {
        e.preventDefault()
    }

    render() {
        const registroUsuario = async () => {
            if(this.state.form.nombre && this.state.form.username && this.state.form.password !== ''){
                await axios.post(baseUrl, {
                    id:uuid,
                    nombre: this.state.form.nombre,
                    username: this.state.form.username,
                    password: md5(this.state.form.password)
                }).then(response => {
                    swal("Bien hecho", "Tu usuario a sido creado", "success")
                }).catch(error => {
                    swal('Algo a fallado', "Puede ser un problema con nuestra servidor, Intentelo de nuevo", "success")
                    console.log(error.message)
                })
            }else{swal('Algo a fallado', "Verifique que todos los datos esten llenos", "warning")}
        }
        return (
            <BoxForm>
                <form onSubmit={this.handleSubmit}>
                    < BoxFormContent>
                        <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" id="icon" alt="User Icon" width="100px" / > 
                        
                        <h2 className="text-light text-center">
                            ¡Registrate en nuestro sistema!
                        </h2>

                        <h4 className="text-light">Crea una cuenta</h4>

                        <InputForm type="text" placeholder="Nombre" name="nombre" className="form-control" autoComplete="off" onChange={this.handleChange} />

                        <InputForm type="text" placeholder="Nombre de usuario" name="username" className="form-control" autoComplete="off" onChange={this.handleChange} />

                        <InputForm type="password" placeholder="Password" name="password" className="form-control" autoComplete="off" onChange={this.handleChange} />

                        <br />

                        <ButtonFrom type="submit" className="btn btn-primary btn-block mb-1" onClick={() => registroUsuario()}>Registro</ButtonFrom>

                        <br />
                        <Link 
                            to="/login"
                            className="text-light"
                        >
                            Ya estas registrado
                        </Link>
                        </ BoxFormContent>
                </form>
            </BoxForm>
        )
    }
}