import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'


export const NavBar = styled.nav`
height: 80px;
width: 87vw;
display: flex;
flex-direction: row;
align-items: center;
padding: 14px 83px;
position: relative;
top: 0;
left: 0;

& > img {
    width: 9vw;
    height: 4.2vh;
    margin: 20px;
}

& > p {
    width: 10vw;
    color: #fff;
}

& > input {
    height: 44px;
    width: 533.19px;
    padding: 11px 12px;
    border: 1px solid #FED941;
    box-sizing: border-box;
    border-radius: 8px 0px 0px 8px;
}
`

export const BoxComponents = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
`
// From and Login
export const BoxForm = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
`
export const BoxFormContent = styled(BoxForm)`
height: auto;
border: 1px solid #FFA903;
border-radius: 20px;
padding: 20px;
background-color: #000000;
`
export const InputForm = styled(Form.Control)`
width: 25vw;
border: 1px solid #FFA903;
margin-bottom: 10px;
`
export const ButtonFrom = styled(Button)`
background-color: #0E3FA9;
color: #FFA903;
width: 15vw;
`
export const ButtonGoogle = styled(ButtonFrom)`
width: 25vw;
`