const grid = document.querySelector('.grid')

const div= document.createElement('div')
div.classList.add('div1')
grid.appendChild(div)

const div2= document.createElement('div')
div2.classList.add('div1')
grid.appendChild(div2)

function cambiarColor(d){
    const r= Math.round(Math.random()*255)
    const g= Math.round(Math.random()*255)
    const b= Math.round(Math.random()*255)
    d.style.backgroundColor =`rgb(${r}, ${g}, ${b})`
}

function crearNuevos(){
    const cant = prompt('Cuantos divs?')
    for(let i=1;i<=cant;i++){
        const div= document.createElement('div')
        div.classList.add('div1')
        const txt = document.createElement('h3')
        txt.textContent = 'Titulo'
        div.appendChild(txt)
        cambiarColor(div)
        grid.appendChild(div)
    }
}

const btn= document.querySelector('#clear')
btn.addEventListener('click', () =>{
    const divs= document.querySelectorAll('.div1')
    const divsArr = [...divs]
    const grid = document.querySelector('.grid')
    divsArr.forEach((dv)=>{
        console.log('btn')
        grid.removeChild(dv)
    })
    crearNuevos()
} )