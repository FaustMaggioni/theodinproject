
const btns = [...document.querySelectorAll('.btn')]
const piedra = 1;
const tijera = 2;
const papel = 3;

function computerPlay(){
    return Math.round(Math.random()*2)+1;
}
function map(txt){
    switch(txt){
        case 'piedra': return piedra;
        case 'tijera': return tijera;
        case 'papel': return papel;
    }
}

function jugar(e,b){
    const idtxt= b.id;
    const id = map(idtxt)
    const resp = computerPlay()
    console.log('res: ',resp)
    const ganaJugador = jugadorgana(id,resp)
    let txt=''
    if(ganaJugador){
        actualizarRes(true)
        txt='Ganaste!'
    }else{
        actualizarRes(false)
        txt='Perdiste :('
    }
    let p= document.querySelector('#res')
    p.textContent = txt
}

let partidasComp=0;
let partidasJugador=0;

function actualizarRes (jug){
    const jugador = document.querySelector('#resJug')
    const comp = document.querySelector('#resComp')
    if(partidasComp+partidasJugador >=5){
        partidasComp=0;
        partidasJugador=0;
        jugador.textContent = partidasJugador
        comp.textContent= partidasComp
    }
    if(jug){
        partidasJugador = partidasJugador +1
        jugador.textContent = partidasJugador
    }else{
        partidasComp = partidasComp +1
        comp.textContent= partidasComp
    }
}

function jugadorgana(id,res){
    if(id==res) return 
    if(res == 3 && id ==1){
        return true
    }else{
        if(id == 3 && id ==1){
        return false
    }else{
        return id<res
    }
}
}
btns.forEach( btn => btn.addEventListener('click', (event) => jugar(event,btn) ))
            
            
            
            
            /*  function alerta(){
                alert('Hola')
                const bt = document.getElementById('boton')
                bt.style.color = 'red'
            }
            const add7 = (i) =>{
                if(typeof(i) === "number"){
                    return i+7
                }else{
                    return "parametro no es un número."
                }
            }
            function multiply(a,b) {
                return a*b
            }
            const capitalize = (input) =>{
                primera = input.charAt(0).toUpperCase()
                input = input.substr(1)
                return primera+input
            }

            const lastLetter = (input) =>{
                return input.charAt(input.length-1)
            }

            console.log("add7 ",add7(3))
            console.log("mult ", multiply(4,5))
            console.log("capitalize: ", capitalize("capitalize"))
            console.log("last ", lastLetter("Faustino")) */