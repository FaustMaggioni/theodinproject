const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.target.style.background = 'yellow'
  });

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('divcont');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p')
red.textContent = 'Hey I’m red!'
red.style.color = 'red'

container.appendChild(red)

const blue = document.createElement('h3')
blue.textContent = 'I´m a blue h3'
blue.style.color = 'blue'

container.appendChild(blue)

const dv= document.createElement('div')
dv.style.backgroundColor = 'pink'
dv.style.border = 'solid'

const h = document.createElement('h1')
h.textContent = 'I’m in a div'
const p= document.createElement('p')
p.textContent = 'ME TOO'

dv.appendChild(h)
dv.appendChild(p)

container.appendChild(dv)

/* a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container. */