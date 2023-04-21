/* Um statement em JS é uma operação como: */

console.log("\nStatements\n")

a = 2 * 2;

console.log(a)

/* Um statement é feito de uma ou mais expressões, como: */

// b * 2;

/* Obtendo o input com o prompt: */

// age = prompt("Please, tell me your age: ")
// console.log(age)

/* Tipos de Valores */

console.log("\nTipos de Valores\n")

console.log("I'm a string!")

console.log(42)

console.log(true)

/* Conversão entre tipos: */

/* A função "Number()" é uma built-in function que realiza uma coerção explícita para o tipo "Number". */

console.log("\nConversão entre Tipos\n")

var c = "42";
var d = Number(c)

console.log(c)
console.log(d)

/* Comentários - Devem explicar o porquê, e não o quê. */

console.log("\nComentários\n")

// - Comentário de uma linha

/*
*   Comentário
*   de
*   múltiplas
*   linhas.
*/

console.log("\nVariáveis\n")

/* O JS é uma linguagem com tipagem dinâmica. As variáveis podem suportar valores de qualquer tipo sem nenhum reforço
* de tipagem. */

//Declarando uma variável e atribuindo um valor a ela:

var amount = 99.99

amount = amount * 2

console.log(amount)

// Constantes são valores que não serão alterados durante a execução do programa.
const TAX_RATE = 0.08;

console.log(TAX_RATE)

/* Bloco IF: */


console.log("\nBloco IF\n")

var bank_balance = 302.13;
var amount2 = 99.99

amount = amount * 2
if(amount < bank_balance){
    console.log("I'll take the accessory!")
} else {
    console.log("No, thanks.")
}

/* Loops: */

console.log("\nLoops\n")

for(var i = 0; i <= 9; i++){
    console.log(i)
}

/* Funções: */

console.log("\nFunções\n")

var amount3 = 99.99 * 2;

printAmount(amount3)

function printAmount(amount){
    console.log(amount)
}
