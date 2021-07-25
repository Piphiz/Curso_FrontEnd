// //Atividade 28/06
function calcularAumento() {

    let nome = prompt("Digite seu nome:")
    let salario = prompt("Digite seu salario:")
    let perc = prompt("Digite o percentual de aumento:")
    let newsal = parseFloat(salario)*(parseFloat(perc)/100+1)
    
    if(newsal > 5000){
        console.log(`Ola ${nome}, seu novo salario e ${newsal}`)
    }else{
        console.log("Parabens pelo aumento")
    }
}

//Atividade 2 28/06
const values = ["ax²", "bx", "c"]
const inputs = []

function calcularBaskhara() {

    for (var i = 0; i < 3; i++) {
        inputs[i] = parseInt(prompt(`Digite um valor para ${values[i]}`))
        while (isNaN(inputs[i])) {
            inputs[i] = parseInt(prompt(`Digite um valor valido para ${values[i]}`))
        }
    }
    let delta = Math.sqrt(inputs[1] * inputs[1] - 4 * inputs[0] * inputs[2])
    
    let x1 = (-inputs[1] + delta) / (2 * inputs[0])
    let x2 = (-inputs[1] - delta) / (2 * inputs[0])
    
    if (isNaN(delta)) {
        console.log("Nao possui raiz real, afinal o delta e negativo")
    } else {
        if (x1 == x2) {
            console.log("So possui uma raiz real, pois so toca o eixo X em um ponto", x1)
        } else {
            console.log("As raizes x' e x'' sao respectivamente", x1, x2)
        }
    }
}