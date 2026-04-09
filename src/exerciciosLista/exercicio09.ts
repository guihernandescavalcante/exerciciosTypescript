// 9. Crie um programa que peça números até o usuário digitar 0 e ao final mostre a soma.

let nume = 1
let somador2 = 0

while(nume != 0) {
    nume = Number(prompt("Digite um número: "))

    if(nume === 0) break

    somador2 += nume
}

console.log(`Soma: ${somador2}`)

