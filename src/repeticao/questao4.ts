// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function runQuestion4Repeticao() {
    let QPares = 0, QImpares = 0
    
    let num = 0
    let continuar = true

    while (continuar) {
        num = Number(prompt("Informe um número [-1 para encerrar]: "))

        if(isNaN(num)) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        if(num === -1) {
            continuar = false
            alert("Encerrando...")
            break
        }

        if(num % 2 === 0) {
            QPares++
        } else {
            QImpares++
        }

        
    }

    console.log(`Pares: ${QPares}`)
    console.log(`Ímpares: ${QImpares}`)
}