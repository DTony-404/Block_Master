import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, InputForm, ButtonFrom, ButtonGoogle, BoxFormContent} from '../style/style'

import swal from 'sweetalert';
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }
    
    async componentDidMount(){
        console.log(this.props.lola)
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
        swal(`Bienvenido ${this.state.form.email}`, "Nos encanta tenerte de nuevo con nosotros", "success")
        localStorage.setItem('usuario', JSON.stringify(this.state.form))
    }

    handelSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <BoxForm>
                <BoxFormContent>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <h1 className="text-light">
                        Inicio de Sesión
                    </h1>

                    <InputForm 
                        type="text" 
                        id="inputEmail"
                        name="email"
                        className="form-control mt-1"
                        placeholder="Email"
                        required=""
                        onChange={this.handleChange}
                    />
                    <InputForm
                        type="Password"
                        id="inputPassword"
                        className="form-control mt-1"
                        placeholder="Contreña"
                        name="password"
                        required=""
                        onChange={this.handleChange}
                    />

                    <ButtonFrom
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={() => this.iniciarSesion()}
                    >
                        Iniciar
                    </ButtonFrom>

                    <div className="">
                        <h6 className="text-light text-center mt-3">Iniciar con una red distinta</h6>

                        <ButtonGoogle className="google-btn btn-primary">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            <b> Iniciar con Google</b>
                        </ButtonGoogle>
                    </div>
                    <Link
                        to="/registro"
                        className="mt-3 text-light"
                        >
                        Crear una cuenta
                    </Link>
                    <Link
                        to="/editar"
                        className="mt-1 text-light"
                        >
                        Configurar cuenta existente
                    </Link>
                    <Link
                        className="mt-1 text-light"
                        to="/"
                    >
                        Volver al inicio
                    </Link>
                </BoxFormContent>
            </BoxForm>
        )
    }
}
