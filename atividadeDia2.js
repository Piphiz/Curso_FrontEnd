//Atividade 3 29/06
const valores = ["primeiro", "segundo", "terceiro", "quarto"]
const numeros = [12, 3, 8, -2, 18, 5, 6, -1]
const pares = []
const impares = []

let j = numeros.length

function listarResultados() {

    for(let i=0;i<4;i++){
        numeros[j] = parseInt(prompt(`Digite o ${valores[i]} valor`))
        while(isNaN(numeros[j])){
            numeros[j] = parseInt(prompt(`Digite o ${valores[i]} valor, e necessario que seja um numero`))
        }
        j++
    }
    
    for(let i=0;i<numeros.length;i++){
        if(numeros[i] % 2 == 0){
            numeros[i]<0 ? pares.push(null) : pares.push(numeros[i])
        } else {
            numeros[i]<0 ? impares.push(null) : impares.push(numeros[i])
        }
    }
    pares.sort(function(a, b){return a - b})
    impares.sort(function(a, b){return a - b})

    console.log(numeros, pares, impares)
}
