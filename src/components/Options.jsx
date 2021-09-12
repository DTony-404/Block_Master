import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, BoxFormContent} from '../style/style'

export default class Options extends Component {
    render() {
        return (
            <BoxForm>
                <BoxFormContent>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <h3 className="text-light m-3">!Bienvenido al area de opciones¡</h3>
                    <h6 className="text-light m-4">¿Que deseas Hacer?</h6>
                    <Link
                     to="/editarPerfil"
                     className="text-warning mt-2">Editar Perfil</Link>
                     <Link
                        to="/login"
                        className="mt-2 text-primary"
                        >
                        Volver a inicio de seccion
                    </Link>
                    <Link
                        to="/"
                        className="mt-2 text-secondary"
                        >
                        Ir al inicio
                    </Link>
                </BoxFormContent>
            </BoxForm>
        )
    }
}
