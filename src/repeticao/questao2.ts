// 2. Desenvolva a tabuada de um número usando for.

export function runQuestion2Repeticao() {

    let num:number

    while(true) {
        num = Number(prompt("Informe um número: "))
        
        if (isNaN(num)) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        break
    }
    

    for(let i=1; i <= 10; i++) {
        console.log(`${i} x ${num} = ${i*num}`)
    }

}