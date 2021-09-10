export default async function search(){
    const lola = "marvel"
    const exp =  /v?/
    const exp2 = exp.exec(lola)
    console.log(exp2.input)
    let dato;
    fetch("https://api-block-master.herokuapp.com/Peliculas/").then((resp) => resp.json()).then((data) => {
        dato = data
    })
    return{dato}
    
}