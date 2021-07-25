//Atividade 9 05/07
const textos = document.querySelector('#groupTexts')

function carregarTextos() {
    const endpoint = "https://jsonplaceholder.typicode.com/posts"

    fetch(endpoint)
        .then(response => response.json())
        .then(json => {
            textos.innerHTML = ""
            json.forEach(texto => {
                textos.innerHTML += `
                    <a onclick="carregarComentarios(${texto.id})" class="list-group-item list-group-item-action">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1">${texto.title}</h5>
                        </div>
                        <p class="mb-1">${texto.body}</p>
                        <div class="list-group" id="loadComentarios${texto.id}"></div>
                    </a>`
            })
        })
}

function carregarComentarios(id) {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    var comentariosId = document.querySelector(`#loadComentarios${id}`)

    fetch(endpoint)
        .then(response => response.json())
        .then(json => {
            comentariosId.innerHTML = ''
            json.map(comentario => {
                comentariosId.innerHTML += `
                    <a class="list-group-item list-group-item-action">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Comentario de ${comentario.name}</h5>
                        </div>
                        <p class="mb-1">${comentario.body}</p>
                        <p class="mb-1">Email: ${comentario.email}</p>
                    </a>`
            })
        })
}
