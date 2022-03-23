// 03-VARIÁVEIS
/*
03-VARIÁVEIS
*/

console.log("Olá Mundo!")

const nome = prompt("Qual é o seu nome?")
const idade = 36

console.log("Olá, meu nome é", nome, "e tenho", idade, "anos.")

/*
Tipos de Variáveis

Numbers: são os tipos que representam números
Stings: são os que representam textos
Booleans: True ou 1 e False ou 0 (São variáveis que só assumem os valores true ou false)

*/
// EXERCÍCIO 1 ######################
const nome1 = "Rafa"
const nome2 = "Bento"
const idade1 = 36
const estudante = true

console.log(nome1, nome2, idade1, estudante)

/* 
typeof: comando que permite ver o tipo do valor da variável
*/

console.log(typeof nome1)

/*
undefined: tipo que representa a falta de valor de uma variável
*/

let novaVariavel
console.log(typeof novaVariavel)

/*
null: também representa a falta de valor da variável. Com a diferença de que, precisa ser atribuída diretamente a uma variável
*/

let minhaVariavel
console.log(minhaVariavel)
minhaVariavel = null
console.log(minhaVariavel)

// EXERCÍCIO 2 ######################

const nome3 = prompt("Qual o nome do usuário?")
const idade3 = prompt("Qual a idade do usuário?")
console.log(typeof nome3)
console.log(typeof idade3)

// CONVENÇÃO ENTRE TIPOS DE VARIÁVEIS

/*
Podemos fazer a convenção entre string e numbers

Número para String toString()
String para Número Number()
*/

// ● Utilizamos o método toString()
const idadeNumeroS = 23
const idadeTextoS = idadeNumeroS.toString()
console.log(typeof idadeNumeroS)
console.log(typeof idadeTextoS)
// ● Utilizamos o método Number()
const idadeTexto = "23"
const idadeNumero = Number(idadeTexto)
console.log(typeof idadeTexto)
console.log(typeof idadeNumero)