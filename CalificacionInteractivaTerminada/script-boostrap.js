const num = document.querySelectorAll('.num')
//const contenedor =document.querySelector('.contenedor')
//const card =document.querySelector('.card')
//const parrCard = document.querySelector('.card-text')
//const enlaces = document.querySelectorAll('a')
//const enviar =document.querySelector('.enviar')
const estrella =document.querySelector('.estrella')
const seleccion =document.querySelector('#seleccion')
const tituloTarjeta=document.querySelector('.card-title')
const textoTarjeta=document.querySelector('.card-text')
const cardBody =document.querySelector('.card-body')
const container =document.querySelector('.container')
const enviar =document.querySelector('.enviar')
let valor=0

const borrarGrisClaro = () =>{
    num.forEach((e) =>{
        e.classList.remove('grisClaro')
        e.classList.add('grisOscuro')
    })
}

document.addEventListener("click", (e)=>{
    if(e.target.matches(".num1")){
        borrarGrisClaro()
        num[0].classList.add('grisClaro')
        num[0].classList.remove('grisOscuro')
        valor=1
        
    }
     if(e.target.matches(".num2")){
        borrarGrisClaro()
        num[1].classList.add('grisClaro')
        num[1].classList.remove('grisOscuro')
        valor=2
        
    }
    if(e.target.matches(".num3")){
        borrarGrisClaro()
        num[2].classList.add('grisClaro')
        num[2].classList.remove('grisOscuro')
        valor=3
   
    }
     if(e.target.matches(".num4")){
        borrarGrisClaro()
        num[3].classList.add('grisClaro')
        num[3].classList.remove('grisOscuro')
        valor=4
    
    }
    if(e.target.matches(".num5")){
        borrarGrisClaro()
        num[4].classList.add('grisClaro')
        num[4].classList.remove('grisOscuro')
        valor=5
    }
    if(e.target.matches(".enviar")){
        //console.log("selecciono: "+valor)
        
        if(valor===0){
            window.alert("Debe seleccionar un valor");
        }else{
            pintarEnviado()
        }
    }
})

const pintarEnviado = () =>{
    estrella.src="./images/illustration-thank-you.svg"
    estrella.classList.add("rounded")
    estrella.classList.add("mx-auto")
    estrella.classList.add("d-block")
    estrella.classList.add("mt-4")
    seleccion.textContent="You selected "+ valor + " out of 5 "
    seleccion.classList.add('grisOscuro')
    tituloTarjeta.textContent=" Thank you!"
    tituloTarjeta.classList.add("text-center")
    tituloTarjeta.classList.add("mt-4")
    textoTarjeta.textContent="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    textoTarjeta.classList.add("text-center")
    cardBody.removeChild(container)
    cardBody.removeChild(enviar)
}