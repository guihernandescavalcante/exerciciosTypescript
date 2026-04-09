// 6. Crie um programa que receba 5 números e mostre quantos são positivos.

let numeros:number[] = []

for(let i:number = 1; i <= 5; i++) {
    let numero:number = Number(prompt(`Digite o ${i}º número: `))

    numeros.push(numero)
}

let positivos = numeros.filter((numero) => numero > 0)

console.log(`${positivos.length} números positivos`)

