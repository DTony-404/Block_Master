import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BoxForm, BoxFormContent} from '../style/style'

export default class Options extends Component {
    render() {
        return (
            <BoxForm>
                <BoxFormContent>
                    <img src="https://res.cloudinary.com/dd8jb0ikv/image/upload/v1630984698/BlockMaster/logo-blockBuster_daxs55.svg" alt="" />
                    <h3 className="text-light m-3">!HOLA UserName¡</h3>
                    <h6 className="text-light m-4">¿Que deseas Hacer?</h6>
                    <Link
                     to="/editarUsername"
                     className="text-warning m-2">Editar Perfil</Link>
                    <p className="text-danger m-2">Cerrar Secion</p>
                </BoxFormContent>
            </BoxForm>
        )
    }
}
