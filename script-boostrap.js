const num = document.querySelectorAll('.num')
const contenedor =document.querySelector('.contenedor')
const card =document.querySelector('.card')
const parrCard = document.querySelector('.card-text')
const enlaces = document.querySelectorAll('a')
const enviar =document.querySelector('.enviar')
const estrella =document.querySelector('.estrella')
let valor=0

/*
const FondoEstrella = () =>{
    estrella.style.backgroundColor="#262F38"
    estrella.style.padding="12px"
    estrella.style.borderRadius="25px"
    estrella.style.marginBottom="25px"
}

const cambiarColorGrisOscuro = () =>{
    num.forEach((e) =>{
        e.style.backgroundColor='#262F38'
        e.style.padding="15px"
        e.style.margin="4px"
    })
}

const cambiarAltoContenedor = () =>{
    contenedor.style.height="930px"
    contenedor.style.background="#141519"
    
}

const cambiarColorTarjeta = () =>{
    card.style.background="linear-gradient(0deg, #171E28 70% ,#363d45,#7c8998)"
    card.style.paddingBottom="15px"
    card.style.borderRadius="25px"
}

const cambiarColorTexto = () =>{
    parrCard.style.color="#8C939D"
    parrCard.style.fontSize="15px"
    parrCard.style.fontFamily= "font-family: 'Overpass', sans-serif";
}

const resEnlaces = () =>{
    enlaces.forEach((e)=>{
        e.style.textDecoration="none"
        e.style.color="#515964"
    })
}
const colorEnviar = () =>{
    enviar.style.color="white"
    enviar.style.fontSize="13px"
    enviar.style.backgroundColor="#FC7613"
    enviar.style.fontWeight = "bold"
}

const cambiarColor = (e) =>{
    console.log(e.target)
}
cambiarColorGrisOscuro()
cambiarAltoContenedor()
cambiarColorTarjeta()
cambiarColorTexto()
resEnlaces()
colorEnviar()
FondoEstrella()
*/
const borrarGrisClaro = () =>{
    num.forEach((e) =>{
        e.classList.remove('grisClaro')
        e.classList.add('grisOscuro')
    })
}

document.addEventListener("click", (e)=>{
    if(e.target.matches(".num1")){
        //console.log("voto 1") 
        //cambiarColorGrisOscuro()
        borrarGrisClaro()
        num[0].classList.add('grisClaro')
        num[0].classList.remove('grisOscuro')
        valor=1
        
    }
     if(e.target.matches(".num2")){
        //console.log("voto 2")
        //cambiarColorGrisOscuro()
        borrarGrisClaro()
        num[1].classList.add('grisClaro')
        num[1].classList.remove('grisOscuro')
        valor=2
        
    }
    if(e.target.matches(".num3")){
        //console.log("voto 3")
        //cambiarColorGrisOscuro()
        borrarGrisClaro()
        num[2].classList.add('grisClaro')
        num[2].classList.remove('grisOscuro')
        valor=3
   
    }
     if(e.target.matches(".num4")){
        //console.log("voto 4")
        //cambiarColorGrisOscuro()
        borrarGrisClaro()
        num[3].classList.add('grisClaro')
        num[3].classList.remove('grisOscuro')
        valor=4
    
    }
    if(e.target.matches(".num5")){
        //console.log("voto 5")
        //cambiarColorGrisOscuro()
        borrarGrisClaro()
        num[4].classList.add('grisClaro')
        num[4].classList.remove('grisOscuro')
        valor=5
    }
    if(e.target.matches(".enviar")){
        console.log("selecciono: "+valor)
        if(valor===0){
            window.alert("Debe seleccionar un valor");
        }
    }
})

