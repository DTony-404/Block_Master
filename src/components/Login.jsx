import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            form: {
                email: '',
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
        });
        console.log(this.state.form) //imprimir todo el estado 
    }

    iniciarSesion = () => {
        alert(`Bienvenido ${this.state.form.email}`)
    }

    handelSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1 className="form-signin">
                    Inicio de Sesión
                </h1>

                <input 
                    type="text" 
                    id="inputEmail"
                    name="email"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                />
                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    name="password"
                    required=""
                    onChange={this.handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => this.iniciarSesion()}
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                    <Link
                    to="/registro"
                    >
                    Create new account
                </Link>
                <Link
                    to="/"
                >
                    Volver al inicio
                </Link>
            </div>
        )
    }
}
