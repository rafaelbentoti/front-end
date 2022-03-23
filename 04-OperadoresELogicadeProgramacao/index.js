/*
LÓGICA DE PROGRAMAÇÃO

● O computador consegue fazer milhões de contas por segundo, mas não é capaz de compreender coisas da forma que o cérebro humano faz

● Para que algo aconteça da maneira que a gente quer em um programa, precisamos explicar CADA PASSO

● Precisamos, então, organizar nossas ideias e transformar em passos que o computador entenda

● Chamamos esse passo-a-passo de instruções passadas para o computador de ALGORITMO

● Um algoritmo é, portanto, uma sequência de passos que visam atingir um objetivo bem definido
   ○ Receita de um bolo, trocar o pneu de um carro

● O algoritmo vai representar o raciocínio lógico envolvido da resolução do problema

● Antes mesmo de começar a programar, você pode pensar em COMO resolver o seu problema

● Não se preocupe com o javascript nesse momento!
Faça desenhos, diagramas, escreva em linguagem natural a sua ideia

● Isso vai te ajudar a entender como o problema funciona e traduzir a solução para código será mais facil

● Temos algumas ferramentas para nos ajudar nesse momento de pensar sobre o problema:
    ○ Descrição textual
    ○ Pseudocódigo
    ○ Fluxogramas

DESCIRÇÃO TEXTUAL

● A ideia aqui é simplesmente escrever o que você está pensando para conseguir resolver o problema

● Isso ajuda a ter mais clareza do que está se passando pela sua cabeça e registrar esses pensamentos, o que será útil quando chegar o momento de programas

Não existe uma regra! Faça da meneira que achar melhor para você

PSEUDOCÓDIGO

● Esse é um passo entre a linguagem natural e o código

● É um texto estruturado de maneira mais próxima à linguagem de programação, mas você não precisa saber as palavras e sintaxes corretinhas

        ler nome
        let mensagem ← `Oi eu me chamo {nome}`
        imprimir mensagem

FLUXOGRAMA

● Um fluxograma é um diagrama que nos ajuda a entender a ordem em que cada coisa acontece na nossa solução de uma forma visual

                            início

                        ler nome
                        mensagem = `Oi eu sou {nome}`
                        imprimir mensagem

                            fim

*/

/*
OPERADORES ARITMÉTICOS #########################

● À seguir vamos ver como fazer algumas operações básicas da matemática no Javascript

*/

// ● SOMA 

const primeiroValorSoma = 10
const segundoValorSoma = 20

const resultadoSoma = primeiroValorSoma + segundoValorSoma + 4

console.log(resultadoSoma) // 34

// ● SUBTRAÇÃO 

const primeiroValorSubtracao = 10
const segundoValorSubtracao = 20

const resultadoSubtracao = primeiroValorSubtracao - segundoValorSubtracao

console.log(resultadoSubtracao) // -10

// ● MULTIPLICAÇÃO 

const primeiroValorMultiplicacao = 10
const segundoValorMultiplicacao = 25

const resultadoMultiplicacao = primeiroValorMultiplicacao * segundoValorMultiplicacao

console.log(resultadoMultiplicacao) // 250

// ● DIVISÃO

const primeiroValorDivisao = 345
const segundoValorDivisao = 10

const resultadoDivisao = primeiroValorDivisao / segundoValorDivisao

console.log(resultadoDivisao) // 34.5

/* Exercício 1
Faça as seguintes operações usando o computador:
1. Somar 3 com 4
2. Multiplicar 3 com 5 e dividir o resultado por 2
3. Subtrair 5 de 4 e multiplicar o resultado por -1
4. Determinar o resto da divisão de 234 por 5
*/
console.log("Exercício 1")
// 1. Somar 3 com 4
const num1 = 3
const num2 = 4
const resultado = num1 + num2

console.log("Exercício 1. (1) Resultado =", resultado)

// 2. Multiplicar 3 com 5 e dividir o resultado por 2
const num3 = 3
const num4 = 5
const resultado2 = num3 * num4
const divisaoPor2 = resultado2 / 2
console.log("Exercício 1. (2) Resultado =", resultado2, "Divido por 2 =",divisaoPor2)

// 3. Subtrair 5 de 4 e multiplicar o resultado por -1

const num5 = 5
const num6 = 4
const resultado3 = num5 - num6
const multiplicarPorResultado = resultado3 * -1
console.log("Exercício 1. (3) Resultado =", resultado3, "Multiplicar o resultado por -1 =",multiplicarPorResultado)

// 4. Determinar o resto da divisão de 234 por 5

const restoDiv = 234 % 5

console.log("Exercício 1. (4) Resultado do resto da divisão de 234 =",restoDiv)

/* 

● Às vezes, podemos querer alterar o valor de uma variável fazendo alguma conta com ela própria

● Por exemplo: vamos supor que temos uma variável de idade e que a pessoa fez aniversário

*/

let minhaIdade = 35
minhaIdade = minhaIdade + 1

console.log(minhaIdade)

/*
Isso pode ser simplificado assim...
*/

let resultado100 = 100

// resultado100 = resultado100 + 20
resultado100 += 20 // SIMPLIFICADO
console.log(resultado100)

// resultado100 = resultado100 - 10
resultado100 -= 10 // SIMPLIFICADO
console.log(resultado100)

// resultado100 = resultado100 * 5
resultado100 *= 5 // SIMPLIFICADO
console.log(resultado100)

// resultado100 = resultado100 / 10
resultado100 /= 10 // SIMPLIFICADO
console.log(resultado100)

console.log("COMPARADORES")

/*
● Comparadores são operadores que permitem comparar variável entre si

● São eles:
    ○ Igual: ===
    ○ Diferente: !==
    ○ Maior e maior igual: > e >=
    ○ Menor e menor igual: < e <=

●  Quando fazemos uma comparação, o nosso resultado sempre vai ser verdadeiro ou falso

○ Ex: 1 é igual a 1? SIM ou NÃO (verdadeiro ou falso)

●  Por isso, resultado de uma comparação é sempre um booleano (true ou false)

●  Quando a comparação for correta, o resultado é true.
   Caso contrário, é false.


● === verifica se o valor e o tipo são iguais
"1" === "2" // false, são diferentes
"2" === "2" // true, são iguais
2 === "2" // false, tipo diferente

const condicao = 1 === 2
// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condicao === false

● !== verifica se o valor e o tipo são diferentes
"1" !== "2" // true, são diferentes
"2" !== "2" // false, são iguais
2 !== "2" // true, tipos diferentes

const condicao = 1 !== 2 // true

● > e >=
○ Pode ser usado com numbers
○ >=: retorna true se os números envolvidos forem
iguais ou se o primeiro for maior que o segundo
○ >: retorna true só se o primeiro for maior que o
segundo

● > e >=
1 > 2 // false, porque 1 é menor que 2
2 > 2 // false, porque 2 é igual a 2
3 > 2 // true, porque 3 é maior que 2
1 >= 2 // false, porque 1 é menor que 2
2 >= 2 // true, porque 2 é igual a 2
3 >= 2 // true, porque 3 é maior que 2

● < e <=

○ Também pode ser usado com numbers
○ <=: retorna true se os números envolvidos forem
iguais ou se o primeiro é menor que o segundo
○ <: retorna true só se o primeiro é menor que o
segundo

1 < 2 // true, porque 1 é menor que 2
2 < 2 // false, porque 2 é igual a 2
3 < 2 // false, porque 3 é maior que 2
1 <= 2 // true, porque 1 é menor que 2
2 <= 2 // true, porque 2 é igual a 2
3 <= 2 // false, porque 3 é maior que 2

*/

/* EXERCÍCIO 2 
Crie duas variáveis que guardem dois números. Imprima na
tela as seguintes mensagens:
1. O primeiro número é igual ao segundo? True/False
2. O primeiro número é diferente do segundo? True/False
3. O primeiro número é maior que o segundo? True/False
4. O primeiro número é menor que o segundo? True/False
*/
console.log("Exercício 2")

let numero1 = 10
let numero2 = 20

let iguais = numero1 === numero2
console.log(iguais)

let iguais2 = numero1 !== numero2
console.log(iguais2)

let iguais3 = numero1 > numero2
console.log(iguais3)

let iguais4 = numero1 < numero2
console.log(iguais4)

console.log("OPERADORES LÓGICOS")

/*
● São operadores especiais usados entre booleaos
● Retornam um valor booleano
● Existem 3 importantes
    ○ Operador E: &&
    ○ Operador Ou: ||
    ○ Operador Não/Negação: !  

Operador E: (&&)
v v = v
v f = f
f v = f
f f = f
*/
console.log("Exercício 3")

const a = true
const b = false
const c = true

console.log(a && b)
console.log(b && c)
console.log(a && c)
console.log(a && b && c)
/*
Operador Ou: (||)
v v = v
v f = v
f v = v
f f = f
*/
console.log("Exercício 4")

const d = true
const e = false
const f = true

console.log(a || b)
console.log(b || c)
console.log(a || c)
console.log(a || b || c)
/*
Operador NÃO: (!)
v = f
f = v
*/

console.log("Exercício 5")
/*
Faça um programa que receba o
nome, ano de nascimento de uma
pessoa e o ano atual e mostre:
● O nome da pessoa com um olá
● A idade dessa pessoa
● Um true ou false que diz se ela é
maior de idade
● Quantos anos ela terá em 2050
*/

const nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))

let idade18 = idade >= 18
let ano2050 = idade + (2050 - 2022)

console.log("Olá", nome)
console.log("Idade:", idade)
console.log("Maior de idade?", idade18)
console.log("Idade em 2050:", ano2050)
