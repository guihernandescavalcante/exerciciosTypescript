// 7. Crie uma função que calcule a média de 3 números e informe se o aluno foi aprovado
// (média >= 7).

function verificarAprovado(nota1:number, nota2:number, nota3:number) {
    let soma = nota1 + nota2 + nota3
    let media = soma / 3

    return media >= 7 ? "Aprovado" : "Reprovado"
}

let nota1 = Number(prompt("Informe a 1º número: "))
let nota2 = Number(prompt("Informe a 2º número: "))
let nota3 = Number(prompt("Informe a 3º número: "))

console.log(verificarAprovado(nota1, nota2, nota3))

