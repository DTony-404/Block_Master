import styled from 'styled-components'
import {Form, Button, Navbar, Carousel} from 'react-bootstrap'

// export const NavBarSecondary = styled.nav`
// height: 80px;
// width: 87vw;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;
// padding: 14px 83px;
// position: relative;
// top: 0;
// left: 0;

// & > img {
//     width: 20vw;
//     height: 8vh;
//     margin: 20px;
// }

// & > p {
//     width: 30vw;
//     text-align: center;
//     align-content: center;
//     color: #fff;
// }
// & > button {
//     height: 37px;
//     width: 50px;
//     border-radius: 0px 8px 8px 0px;
//     background-color: #FED941;
//     margin-right: 10px;
// }

// & > input {
//     height: 35px;
//     width: 533.19px;
//     padding: 11px 12px;
//     border: 1px solid #FED941;
//     box-sizing: border-box;
//     border-radius: 8px 0px 0px 8px;
//     margin-left: 40px;
// }
// `

export const BoxBackgroun = styled(Navbar)`
background-color: #0F0E17;
height: 112px;
width: 100vw;
position: fixed;
z-index: 996;
`

export const BoxSearch = styled.div`

& > input {
height: 36px;
width: 300.19px;
padding: 11px 12px;
border: 2px solid #FED941;
box-sizing: border-box;
border-radius: 8px 0px 0px 8px;
};
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
margin-top: 20px;
position:relative;
left: 15vw;
`
export const BoxFormContent = styled(BoxForm)`
height: auto;
width: 45vw;
border: 1px solid #FFA903;
border-radius: 20px;
padding: 20px;
background-color: #000000;
`
export const InputForm = styled(Form.Control)`
width: 70vw;
border: 1px solid #FFA903;
margin-bottom: 10px;

@media(min-width: 1000px){
width: 25vw;
}
`
export const ButtonFrom = styled(Button)`
background-color: #0E3FA9;
color: #FFA903;
width: 25vw;


@media(min-width: 1000px){
width: 15vw;
}
&:hover{
    transform: scale(1.08);
}
`
export const ButtonGoogle = styled(ButtonFrom)`
width: 70vw;

@media(min-width: 1000px){
    width: 25vw;
}
`
// Carousel 

export const BoxCarouselLocal = styled.div`
display: flex;
align-items:center;
align-content:center;
justify-content: center;
`

export const CarouselLocal = styled(Carousel)`
height: 320px;
width: 98vw;
margin-top: 120px;
display: flex;
border-radius: 20px;
`

export const CarouselLocalImg = styled(Carousel.Item)`
& > img{
    border-radius: 20px;
    height: 320px;
    width: 98vw;
}
`
// Cards 

export const BoxContainerCards = styled.div`
width: 100vw;
height: 50vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

& > button{
    height: 36px;
    width: 50px;
    border: 0.5px solid #FED941;
    border-radius: 0px 8px 8px 0px;
    background-color: #FED941;
    margin-right: 10px;
    position: fixed;
    z-index: 997;
    top: 38px;
    right: 150px;
}
`
export const ClasiCards = styled.div`
background-image: url("${props => props.background}");
background-size: 220px 330px;
height: 330px;
width: 220px;
margin: 10px;
border-radius: 8px;
border: 3px solid #0F0E17;

& > div {
    border-top: 2px solid ${props => props.border};
    border-bottom: 2px solid ${props => props.border};
    border-right: 2px solid ${props => props.border};
    height:54px;
    width: 114px;
    position: relative;
    top: 24px;
    border-radius: 0px 40px 40px 0px;
    background-color: rgb(0, 0, 0, 0.5);
    & > img {
        width: 24px;
        height: 24px;
        position: relative;
        top: 2.5px;
        left: 14px;
    }
    & > span {
        font-size: 28px;
        color:#FFFFFE;
        text-align: center;
        width: 35px;
        height: 34px;
        position: relative;
        line-height: 34px;
        font-family: Montserrat;
        letter-spacing: 0.01em;
        font-weight: bold;
        left: 44px;
        top: 8px;
    }
}
`
// Description
export const Contenedor = styled.div`
height:100vh;
width: 100vw;
display: ${props => props.descripciones};
justify-content: center;
align-items: center;
align-content: center;
position: fixed;
background-color:rgb(0, 0, 0, 0.9);
z-index:998;
top: 0px;
`
export const ContenedorVide = styled(Contenedor)`
display: flex;
`

export const BotonX = styled.button`
height: 100px;
width: 100px;
font-size: 30px;
color: #fff;
background-color: transparent;
border: none;
position: absolute;
right: 60px;
top: 100px;
`
export const BoxDescription = styled(Contenedor)`
height: auto;
width: 100vw;
position: relative;
background-color: transparent;
display: flex;
`
export const BoxImg = styled.div`
width: 45vw;
height: 50vh;
& > img {
    width: 28vw;
    height: 28vh;
    position: relative;
    left: 70px;
    transform: matrix(0.71, -0.41, 1.22, 0.71, 0, 0);
    border-radius: 9.78169px;
}
`
export const BoxPuntuacionImg = styled.div`
position: absolute;
left: 7.5vw;
top: 12vh;
transform: matrix(0.71, -0.41, 1.22, 0.71, 0, 0);
background-color: rgb(0, 0, 0, 0.5);
border-top: 2px solid ${props => props.border};
border-bottom: 2px solid ${props => props.border};
border-right: 2px solid ${props => props.border};
height:44px;
width: 144px;
border-radius: 0px 40px 40px 0px;

& > img {
    width: 24px;
    height: 24px;
    position: relative;
    top: -4.5px;
    left: 18px;
}
& > span {
    font-size: 28px;
    color:#FFFFFE;
    text-align: center;
    position: relative;
    line-height: 34px;
    font-family: Montserrat;
    letter-spacing: 0.01em;
    font-weight: bold;
    left: 44px;
    top: 2px;
}
`

export const BotonVerYa = styled(Button)`
background-color: #FED941;
color: #000000;
border: 1px solid #000000;
width: 274.98px;
height: 30px;

display: flex;
flex-direction: row;
align-items:center;
justify-content: center;
padding: 0px;

position: static;
left: 0%;
right: 0%;
top: 85.54%;
bottom: 0%;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 40px 0px;

&:hover{
    background-color: #FED941;
    color: #000000;
    border: 1px solid #000000;
    transform: scale(1.05)
}
`
export const BotonVerMas = styled(BotonVerYa)`
width: 150px;
background-color: #0F0E17;
color: #FED941;
border: 1px solid #FED941;

&:hover{
    background-color: #0F0E17;
    color: #FED941;
    border: 1px solid #FED941;
}
`