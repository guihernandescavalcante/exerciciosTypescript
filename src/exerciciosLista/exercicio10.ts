// 10. Crie uma função que receba um número e imprima a tabuada dele usando for.

let numbe = Number(prompt("Informe um número: "))

for(let i = 1; i <= 10; i++) {
    console.log(`${numbe} x ${i} = ${numbe * i}`)
}