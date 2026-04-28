// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function runQuestion3Repeticao() {

    let totalSalarios = 0;
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    let homens = 0;
    let mulheres = 0;

    let continuar = true;

    while (continuar) {
        const nome = prompt("Nome:") || "";
        const horas = Number(prompt("Horas trabalhadas:"));
        const valorHora = Number(prompt("Salário-hora:"));
        const sexo = prompt("Sexo (M/F):")?.toUpperCase();

        const salario = horas * valorHora;
        totalSalarios += salario;

        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = nome;
        }

        if (sexo === "M") homens++;
        if (sexo === "F") mulheres++;

        continuar = prompt("Deseja continuar? (S/N)")?.toUpperCase() === "S";
    }

    const total = homens + mulheres;

    console.log(`Total Salários: R$ ${totalSalarios.toFixed(2)}`);
    console.log(`Maior Salário: ${nomeMaiorSalario} (R$ ${maiorSalario.toFixed(2)})`);
    console.log(`Homens: ${homens} (${((homens / total) * 100 || 0).toFixed(1)}%)`);
    console.log(`Mulheres: ${mulheres} (${((mulheres / total) * 100 || 0).toFixed(1)}%)`);


}