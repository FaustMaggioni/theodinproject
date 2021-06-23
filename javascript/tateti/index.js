let gameBoard = ['','','','','','','','','']
let vacios = [true,true,true,true,true,true,true,true,true]
const player = (name) =>{
    return {name}
}

let equipo = ''
let cpu =''
let terminado = false
const elector = document.querySelector('#eleccion')
elector.addEventListener('change', () => elegirEquipo (elector))
const elegirEquipo = (e) =>{
    equipo = e.value
    if(equipo == 'X'){
        cpu = 'O'
    }else{
        cpu='X'
    }
    displayGameBoard()
}

const crearInputs = (div) =>{
    const input = document.createElement('select')
    input.addEventListener('change', () => jugada(div,input))
    const start = document.createElement('option')
    start.textContent = '-'
    input.appendChild(start)
    const x = document.createElement('option')
    x.textContent = equipo
    input.appendChild(x)
    return input
}
let cantJugadas = 0
const jugada = (div,input) =>{
    cantJugadas++;
    const aux = input.value
    const index= div.id
    gameBoard[index] = aux
    vacios[index] = false
    console.log(gameBoard)
    actualizarDiv(div,input,aux)
    if(cantJugadas>=5){
    const {ganador,equipo} = chequearGanador()
    console.log('ganador: '+ganador)
    if(ganador){
        terminarPartida(equipo)
        terminado= true
    }}
    if(!terminado){
        jugadaCPU()
    }
}
const actualizarDiv = (div,input,aux) =>{
    div.removeChild(input)
    const h3= document.createElement('h3')
    h3.textContent = aux
    div.appendChild(h3)
}
const jugadaCPU = ()=>{
    cantJugadas++;
    const disponibles = []
    vacios.forEach((celda,i) =>{
        if(celda){
            disponibles.push(i)
        }
    })
    const indexRandom = Math.round(Math.random()*disponibles.length-1)
    const juegaCPU= disponibles[indexRandom]
    console.log(juegaCPU)
    gameBoard[juegaCPU] = cpu
    vacios[juegaCPU]=false
    const div = document.getElementById(juegaCPU)
    const input= div.children[0]
    console.log(div)
    const aux = cpu
    actualizarDiv(div,input,aux)
    console.log(gameBoard)
}

const terminarPartida = (equipo) =>{
    console.log('terminar partida')
    while (tablero.firstChild) {
        tablero.removeChild(tablero.lastChild);
    }
    displayGameBoard()
    alert('Tenemos un ganador: '+equipo)
}

const chequearGanador = () =>{
    console.log(gameBoard)
    const cero=gameBoard[0]
    console.log('Cero: ',cero)
    const uno=gameBoard[1]
    const dos=gameBoard[2]
    const tres=gameBoard[3]
    const cuatro=gameBoard[4]
    const cinco=gameBoard[5]
    const seis=gameBoard[6]
    const siete=gameBoard[7]
    const ocho=gameBoard[8]
    if(cero!='' && (cero==uno && cero==dos) || (cero==tres && cero == seis) || (cero==cuatro && cero==ocho)){
        return {ganador: true,equipo: cero}
    }else{
        if(cinco != '' && (cinco==dos && cinco == ocho) || (cinco==tres && cinco==cuatro)){
            return {ganador: true,equipo: cinco}
        }else{
            if(cuatro != '' && (cuatro==siete && cuatro==uno) || (cuatro==seis && cuatro==dos)){
                return {ganador: true,equipo: cinco}
            }else{
                if(seis!='' && seis==ocho && seis==siete){
                    return {ganador: true,equipo: seis}
                }
            }
        }
    }
    return false
}

const tablero = document.querySelector('.tablero')
const displayGameBoard = () =>{
    for(let i in gameBoard){
        const div = document.createElement('div')
        const input = crearInputs(div)
        div.classList.add('celda')
        div.id=`${i}`
        div.appendChild(input)
        tablero.appendChild(div)
    }
}


