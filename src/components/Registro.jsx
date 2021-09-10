import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

    registroUsuario = async () => {
        await axios.post(baseUrl, {
            id:uuid,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }).then(response => {
            alert('Usuario Registrado')
        }).catch(error => {
            alert('Usuario no existe')
            console.log(error.message)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        ¡Registrate en nuestro sistema!
                    </h1>
                <div>
                    <img src="" id="icon" alt="User Icon" width="100px" / > <h3>Crea una cuenta</h3>
                </div>

                <input type="text" placeholder="Nombre" name="nombre" className="form-control" autoComplete="off" onChange={this.handleChange} />

                <input type="email" placeholder="Email" name="username" className="form-control" autoComplete="off" onChange={this.handleChange} />

                <input type="password" placeholder="Password" name="password" className="form-control" autoComplete="off" onChange={this.handleChange} />

                <br />

                <button type="submit" className="btn btn-primary btn-block mb-1" onClick={() => this.registroUsuario()}>Registro</button>

                <br />
                <Link to="/login">Already registered?</Link>
                </form>
            </div>
        )
    }
}