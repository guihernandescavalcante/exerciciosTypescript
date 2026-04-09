// 5. Crie uma função que receba a idade de uma pessoa e informe se ela é maior de idade.

function ehMaiorIdade(idade:number):string{
    return idade >= 18 ? "Maior de Idade" : "Menor de Idade"
}

const idade:number = Number(prompt("Informe a idade: "))

console.log(ehMaiorIdade(idade))

