let books = []
function Book(title, author, readed,id){
    this.title=title;
    this.author=author;
    this.readed=readed;
    this.id=id;
    this.info= function(){
        let leido= 'you didn´t read it yet.';
        if(this.readed){
            leido='you have already read it.'
        }
        return `${title}, wrote by ${author}, ${leido} `
    }
}

const hobbit = new Book('El hobbit', 'JRR Tolkien', true,0)
const hobbit1 = new Book('El hobbit', 'JRR Tolkien', true,1)
const hobbit2 = new Book('El hobbit', 'JRR Tolkien', true,2)

books.push(hobbit)
books.push(hobbit1)
books.push(hobbit2)
console.log(books)
const grid= document.querySelector('.grid')
books.forEach((book) => displayBooks(book))
const form = document.createElement('form')
const inputTitle = document.createElement('input')
inputTitle.placeholder ='Titulo'
const inputAutor = document.createElement('input')
inputAutor.placeholder ='Autor'
const inputReaded = document.createElement('select')
const opcionLeido = document.createElement('option')
opcionLeido.textContent = 'Leido'
const opcionNoLeido = document.createElement('option')
opcionNoLeido.textContent = 'No leido'
inputReaded.appendChild(opcionLeido)
inputReaded.appendChild(opcionNoLeido)

const submit = document.createElement('input')
submit.type ='submit'

form.appendChild(inputTitle)
form.appendChild(inputAutor)
form.appendChild(inputReaded)
form.appendChild(submit)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const t= e.target[0].value 
    const a= e.target[1].value
    const l= e.target[2].value == 'Leido'
    addBookToLibrary(t,a,l,books.length)
    quitForm()
})
const div= document.querySelector('.container')

const add = document.querySelector('#addBook')
add.addEventListener('click', showForm)

function showForm(){
    div.appendChild(form)
}
function quitForm(){
    div.removeChild(form)
}

function removeBook(d){
    grid.removeChild(d)
    const id=d.id
    books= books.filter((book) => book.id!= id)
    for(let i=id;i<=books.length-1;i++){
        books[i].id= books[i].id-1
    }
    console.log(books)
}

function displayBooks(book){
    const div = document.createElement('div')
    div.classList.add('book')
    div.id= book.id
    const titulo = document.createElement('h3')
    titulo.textContent = book.title
    const subtitulo = document.createElement('h5')
    subtitulo.textContent = book.author
    const remove = document.createElement('button')
    remove.addEventListener('click', () => removeBook(div))
    remove.textContent= 'REMOVE'
    const toggle = document.createElement('button')
    toggle.addEventListener('click', () => leer (book,div))
    toggle.textContent = 'Lo leiste?'
    const leido = document.createElement('p')
    let txtLeido = 'Lo leiste!'
    if(!book.readed){
        txtLeido = 'No lo leiste :('
    }
    leido.textContent = txtLeido
    div.appendChild(titulo)
    div.appendChild(document.createElement('hr'))
    div.appendChild(subtitulo)
    div.appendChild(leido)
    div.appendChild(remove)
    if(!book.readed){
        div.appendChild(toggle)}
    grid.appendChild(div)
}

function leer(book,div){
    book.readed=true
    div.children[2].textContent = 'Lo leiste!'
}
function addBookToLibrary(title,author,readed,id){
    const book = new Book(title,author,readed,id)
    books.push(book)
    displayBooks(book)
}



