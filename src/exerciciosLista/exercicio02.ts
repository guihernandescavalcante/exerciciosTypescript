// 2. Crie uma função que receba um número e retorne se ele é par ou ímpar.

function ehPar(num:number):string{
    return num % 2 === 0 ? "Par" : "Ímpar"
}

const numer:number = Number(prompt("Informe um número: "))

console.log((ehPar(numer)))

