// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor < 1000: Retorna "Bronze"
// o Se valor entre 1000 e 5000: Retorna "Prata"
// o Se valor > 5000: Retorna "Ouro"
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria "Ouro".

export function runQuestion5Repeticao() {

    function classificarVenda(valor:number) {
        if(valor < 1000) {
            return "Bronze"
        } else if(valor >= 1000 && valor <= 5000) {
            return "Prata"
        } else {
            return "Ouro"
        }
    }

    let contador = 0
    let valoresVendas:number[] = []
    let classificacaoVendas:string[] = []
 
    while(contador < 5) {
        let valorVenda = Number(prompt(`Informe o valor da venda do ${contador+1}º vendedor: `))

        if(isNaN(valorVenda) || valorVenda < 0) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        let classificacao = classificarVenda(valorVenda)

        valoresVendas.push(valorVenda)
        classificacaoVendas.push(classificacao)
        
        contador++
    }

    let totalVendas = valoresVendas.reduce((acumulador, atual) => acumulador + atual , 0)
    let maiorVenda = Math.max(...valoresVendas)
    let quantidadeOuro = (classificacaoVendas.filter((cl) => cl === "Ouro")).length

    console.log(`Total de vendas: ${totalVendas}`)
    console.log(`Maior venda: ${maiorVenda}`)
    console.log(`Quantidade "Ouro": ${quantidadeOuro}`)

}