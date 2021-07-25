// alert(("Hello World!"))

// console.log("Hello World!")

//Declaracao de Variaveis

// //Padrao
// var numero1 = 000
// numero1 = 123
// //Let e utilizado no bloco em que foi definido, e caso 
// //seja criado dps de ser chamado da problema
// let numero2= 456
// //Constante, nao muda o valor
// const numero3 = 789

//Ver tipo da variavel
// console.log(typeof(nomedavariavel))

//Concatenar variaveis sem ter que fazer + " " +
// exemplo: `Ola ${nomedavariavel} voce e ${nomedavariavel2}`

//let nome = prompt("Digite o seu nome:")

//let numero1 = prompt("Digite um numero:")
// //QQ valor vai ser recebido como string para converter tem de usar o parse
// numero1 = parseInt(nomedavariavel)

//checkar se e nan = not a number isNaN()

//debugger codigo pra debugar o programa

//Padrao arrow function
//const soma = (qualquervariavel) => {funcao} /declara uma funcao sem ter que digitar function 
//const soma = (qualquervariavel) => funcao   /declara uma funcao sem ter que digitar function e o return

//Fazer para todos os valores dentro
// for(let numero in numeros){
//     codigo
// }
//Outra forma excluindo valores
// numeros.forEach(numero => {
//     if(index < x){
//         return false
//     }
// });

//Template literals
//usa o `` para declarar um texto e com isso variaveis podem
//ser inseridas usando ${variavel}

// [] array, {} objeto

//Forma de fazer sem function para modelo mais enxuto
// const pessoa = {
//     idade: 22,
//     fazerAniversario (){
//         this.idade++
//     }
// }

// const funcionarios = [
//     {
//         nome: "Roberta",
//         idade: 45,
//         cargo: "Professor"
//     },
//     {
//         nome: "Sacul",
//         idade: 42,
//     }
// ]

//Formas de usar o css
// .div_class
// #div_id
// div

//Seletores
//nth-child(position) para selecionar qual seria de uma lista
//* pega tudo
//+ seleciona o que vier apos
//> seleciona o que e filho direto
//~ seletor de irmao
//$ termina com
//:not(seletor) para os que nao tem
//x[atributo] seleciona atributo ex: li[class=""] ou div[type=""]

//Selecionar algo com o javascript
// const exemplo = document.getElementById("exemplo")
// ou document.querySelector("#caixa")
// ou document.getElementsByClassName("caixa")[0]

//ex:
//(ul li:nth-child(2) h2) pega o h2 do segundo elemento da lista

//Emmet para criar exemplo ul>li*3

//Criar elementos(serve pra fazer reacoes apos clicar em algo e etc.)
// const caixa = document.querySelector("#caixa")
// const p = document.createElement("ul")
// const textNode = document.createTextNode("Unime")
// p.append(textNode)
// caixa.appendChild(p)
//Tudo acima e igual a esse codigo
// caixa innerHTML = "<p>Unime</p>"

//addEventListener("click", ()=>{window.location="endereco"})

//exemplo 
{/* <h1>Curso de Férias - Unime 2021.2</h1>

<button data-id="UN1D3V: 1">Clique em mim</button>
<button data-id="UN1D3V: 2">Clique em mim</button>
<button data-id="UN1D3V: 3">Clique em mim</button>
<button data-id="UN1D3V: 4">Clique em mim</button>
<button data-id="UN1D3V: 5">Clique em mim</button>
<button data-id="UN1D3V: 6">Clique em mim</button>

<script>

    // const botao = document.querySelector("button")
    
    // botao.addEventListener("click", () => {
    //     window.location = "http://google.com"
    // })

    const botoes = document.querySelectorAll("button")

    botoes.forEach(botao => {

        botao.addEventListener("mouseover", () => {
            alert(`Você clicou no botão: ${botao.dataset["id"]}`)
        })
    })

</script> */}

//Alt+shift+f identa sozinho

//This e bugado com arrow function, usar function normal quando for usar


//Contador de caracteres e mover bolinha
// <div class="quadro">
//     <div class="bolinha"></div>
// </div>

// <div>
//     <input type="text" id="entrada">
//     <button>Clica em mim disgraça</button>
// </div>

// <p>Limite de <span id="contador">0</span>/100</p>

// <script>

        
//     const bolinha = document.querySelector(".bolinha")
//     let positionX = 0
//     let positionY = 0

//     document.addEventListener("keydown", (event) => {
//         let command = event.keyCode
//         switch(command){
//             case 37:
//                 positionX -= 10
//                 bolinha.style.left= `${positionX}px`
//                 break
//             case 38:
//                 positionY -= 10
//                 bolinha.style.top= `${positionY}px`
//                 break
//             case 39:
//                 positionX += 10
//                 bolinha.style.left= `${positionX}px`
//                 break
//             case 40:
//                 positionY += 10
//                 bolinha.style.top= `${positionY}px`
//                 break
//         }
//     })

        
//     let entrada = document.querySelector("#entrada")
//     let contador = document.querySelector("#contador")

//     entrada.addEventListener("keyup", function () {
//         let total = this.value.length
//         contador.innerText = total
//     })

//Bootstrap
//draggable="true" cria um mini botao quando arrastar, mas e so visual

//Mover botao de Cards
{/* <div class="container">
 
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>Curso de Férias - Unime 2021.2</h1>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-primary text-light">
                        Origem
                    </div>
                    <div class="card-body" id="origem">
 
                        <div data-id="1" class="btn btn-success" draggable="true">Botão 1</div>
                        <div data-id="2" class="btn btn-primary" draggable="true">Botão 2</div>
                        <div data-id="3" class="btn btn-danger" draggable="true">Botão 3</div>
 
                    </div>
                    <div class="card-footer">
                        total de itens: <span id="total_itens_origem"></span>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-primary text-light">
                        Destino
                    </div>
                    <div class="card-body" id="destino">
                    </div>
                    <div class="card-footer">
                        total de itens: <span id="total_itens_destino"></span>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
<script>
 
 const origem = document.querySelector("#origem")
 const destino = document.querySelector("#destino")
 const botoes = document.querySelectorAll(".btn")
 const totalItensOrigem = document.querySelector("#total_itens_origem")
 const totalItensDestino = document.querySelector("#total_itens_destino")

 origem.addEventListener("dragover", (event) => {
     event.preventDefault()
 })

 destino.addEventListener("dragover", (event) => {
     event.preventDefault()
 })

 function atualizarTotalDeItens() {
     totalItensOrigem.innerText = document.querySelectorAll("#origem .btn").length
     totalItensDestino.innerText = document.querySelectorAll("#destino .btn").length
 }

 function drop (event) {
     event.preventDefault()
     let data = event.dataTransfer.getData("text")
     event.target.appendChild(document.querySelector(`[data-id="${data}"]`))
     atualizarTotalDeItens()
 }

 origem.addEventListener("drop", drop)
 destino.addEventListener("drop", drop)

 botoes.forEach(botao => {
     botao.addEventListener("dragstart", (event) => {
         event.dataTransfer.setData("text", event.target.dataset.id)
     })
 })

</script> */}

//Formulario para mostrar texto ou substituir valor
{ /*    <div class="container">

        <div class="row">

            <div class="col-md-12">
                
                <div class="mb-3 mt-3">
                    <label for="nome" class="form-label">Informe o seu nome:</label>
                    <input type="text" class="form-control" id="nome">
                </div>

            </div>

            <div class="col-md-12">

                <div class="mb-3">
                    <label for="linguagem" class="form-label">Linguagem de programação:</label>
                    <select class="form-select" id="linguagem">
                        <option value="0">Selecione uma linguagem</option>
                        <option value="1">Java</option>
                        <option value="2">PHP</option>
                        <option value="3">Javascript</option>
                        <option value="4">Python</option>
                    </select>
                </div>

            </div>

        </div>

        <div class="row">
            <div class="col-md-12">
                <hr>
                <button id="button" class="btn btn-primary">Processar formulário</button>
            </div>
        </div>

    </div>

    <script>

        const linguagens = ["Selecione uma linguagem", "Java", "PHP", "Javascript", "Python"]

        const nomeUsuario = document.querySelector("#nome")
        const linguagemUsuario = document.querySelector("#linguagem")
        const button = document.querySelector("#button")

        const nomePadrao = "Leo"
        const linguagemPadrao = "2"

        button.addEventListener("click", () => {
            nomeUsuario.value = nomePadrao
            linguagemUsuario.value = linguagemPadrao
            // if(nomeUsuario.value === "" || linguagemUsuario.value === "0") {
            //     alert("Todos os dados são obrigatório!")
            // } else {
            //     console.log(`Seu nome é ${nomeUsuario.value} e sua linguagem de programação é ${linguagens[linguagemUsuario.value]}`)
            // }
        })

    </script> */}

//Pegando link e imprimindo no console
    // const endpoint = "link"

    // fetch(endpoint)
    // .then(response = response.json)
    // .catch(error =>{
    //     alert('deu merda')
    // })
    // .then(json =>{
    //     json.forEach(variavel =>{
    //         algo acontece
    // })
    // })

//Exemplo 
// const estados = document.querySelector("#estados")
// const municipios = document.querySelector("#municipios")
// const button = document.querySelector("#btn_load")

// function carregarEstados() {
//     const endpoint = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    
//     fetch(endpoint)
//         .then(response => response.json())
//         .then(json => {
//             estados.innerHTML = ""
//             estados.innerHTML += "<option value=''>--- selecione ---</option>"
//             json.forEach(estado => {
//                 estados.innerHTML += `<option value="${estado.sigla}">${estado.nome}</option>`
//             })
//         })
// }

// function carregarDistritos(uf){
//     const endpoint = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`

//     fetch(endpoint)
//         .then(response => response.json())
//         .then(json => {
//             municipios.innerHTML = ""
//             municipios.innerHTML += "<option value=''>--- selecione ---</option>"
//             json.map(municipio => {
//                 municipios.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`
//             })
//         })
// }

// estados.addEventListener("change", function (){
//     carregarDistritos(this.value)

//     if(this.value === ""){
//         municipios.setAttribute("disabled", "disabled")
//     } else{
//     municipios.removeAttribute("disabled")
//     }
// })

// carregarEstados()


//Fazer funcoes com o vue e so usar methods: {} e para passar
// no button ou onde for usar, usar o @click="nome da funcao"
//

// v-if remove da pagina v-show e o mesmo que v-if so que deixa no html
// v-if seguido de v-else funciona como if e else normal exemplo v-if="valor>=0"
// existe o v-else-if
// v-for para cada elemento exemplo v-for="number of numbers"

//Methods e para funcoes e computed e para dados que vao ser processados e serao passados
// como variaveis

//Declaracao de um vue
//const app = new Vue({
//     el: 'achar o elemento ex: #app',
//     data: {
//         message: O que sera passado
//     },
//     methods: {
//         funcao1() {},  
//         funcao2() {}...
//     }
// })
