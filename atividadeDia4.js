//Atividade 5 01/07
const numbers = [12, 3, 8, -2, 18, 5, 6, -1]
function separator(array) {
    let result = [[], []]
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result[1].push(array[i])
        } else {
            result[0].push(array[i])
        }
    }
    return console.log(result)
}
// console.log(separator(numbers))

//Atividade 6 01/07

const names = ["Cleber", "Eduardo", "Lucas", "Paulo", "Leonardo", "Nata", "Thiago"]
const box = document.querySelector("#box")
const ul = document.createElement("ul")
ul.setAttribute("id", "list")
ul.setAttribute("class", "list-group col-4")
box.appendChild(ul)

function createList(element, index, arr) {
    var li = document.createElement('li')
    li.setAttribute("class", `${index} list-group-item`)

    ul.appendChild(li)

    li.innerHTML = li.innerHTML + element
}

function selectId() {
    let id = parseInt(prompt(`Digite em qual posicao o nome vai ser inserido`))
    while (isNaN(id)) {
        id = parseInt(prompt(`Digite um valor valido`))
    }
    return id - 1
}

function addName(array, id) {
    let name = prompt(`Digite o nome a ser inserido`)
    while (name == '') {
        name = prompt(`Digite o nome a ser inserido, nao deixe em branco`)
    }
    array[id] = name
    ul.innerHTML = ''
    names.forEach(createList)
}

names.forEach(createList)

//Atividade 7 01/07
const squares = document.querySelectorAll(".square")
let clickCount = [0, 0, 0]

squares.forEach((square, index) => {
    square.addEventListener("click", () => {
        console.log(`Voce clicou ${++clickCount[index]} no quadrado ${square.getAttribute('value')}`)
    })
});
