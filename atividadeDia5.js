//Atividade 8 02/07
const listagem = document.querySelector("#listagem")
const bonificacao = []

function showBonus() {
    listagem.innerHTML = ''
    
    funcionarios.forEach((funcionario, index) => {
        var bonificavel = false
        var temp = 0

        let divCardMain = document.createElement("div")
        divCardMain.setAttribute("class", "col-2")

        let divCard = document.createElement("div")
        divCard.setAttribute("class", "card")

        let divCardHeader = document.createElement("div")
        divCardHeader.setAttribute("class", "card-header text-center bg-danger text-white")
        divCardHeader.innerHTML = `Funcionario:`

        let divCardBody = document.createElement("div")
        divCardBody.setAttribute("class", "card-body")

        divCardBody.innerHTML = `
        <h5 class="card-title">Dados</h5>
        <p>Nome: <span class="text-success">${funcionario.nome}</span></p>
        <p>Total de Filhos: <span class="text-success">${funcionario.filhos.length}</span></p>`

        let p = document.createElement("p")
        p.innerHTML = `Idade dos filhos: `
        if(funcionario.filhos.length === 0){
            bonificacao[index] = 0
            p.innerHTML += `<span class="text-success">N/A</span>`
        }
        funcionario.filhos.forEach((filho, index) => {
            if(filho.idade>10 && filho.idade<=18){
                temp += 50
                bonificavel = true
            }
            if(filho.idade<10){
                temp += 70 
                bonificavel = true
            }
            if (index === funcionario.filhos.length - 1) {
                p.innerHTML += `<span class="text-success">${filho.idade}</span>`
            } else {
                p.innerHTML += `<span class="text-success">${filho.idade}</span>, `
            }
        })
        bonificacao[index] = temp
        divCardBody.appendChild(p)

        divCardBody.innerHTML += `<p>Bonificavel: <span class="text-success">${bonificavel ? "Sim" : "Nao"}</span></p>`

        let divCardFooter = document.createElement("div")
        divCardFooter.setAttribute("class", "card-footer text-center")
        divCardFooter.innerHTML = `Valor do Bonus: <span class="text-success">R$ ${bonificacao[index]}</span>`

        divCard.appendChild(divCardHeader)
        divCard.appendChild(divCardBody)
        divCard.appendChild(divCardFooter)
        divCardMain.appendChild(divCard)
        listagem.appendChild(divCardMain)
    });
}
