// document.write("Hello")

var myvar = "Hello"
const myconst = "He"

// document.write(myvar)

//objetos
const pessoa = {
  altura: '1,80m',
  idade: 24,
  solteiro: true,
  correr(){
    return 'Run Forest'
  }
}

// document.write(pessoa.correr())

const myarray = ['blue', 'green', 1, {name:"my name"}]

// document.write(myarray[3].name)

// functions
function sayMyName(name) {
  document.write(name)
}

// sayMyName('Lucas')

const notaFinal = 7

if (notaFinal < 5) {
    document.write("Reprovado")
} else {
  document.write("Aprovado")
}

for (i = 0; i < 10; i++) {
  //a crase permite interpolação
  document.write(`<p>${i}</p>`)
}

