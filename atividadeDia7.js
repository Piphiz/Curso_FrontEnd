//Atividade 10 06/07
const atividade10 = new Vue({
    el: '#atividade10',
    data: {
        username: "",
        userGithub: "",
        cardActive: false,
        checker: false,
        location: "",
        urlHtml: "",
        profilePicture: "",
        repositoriesGithub: []
    },
    methods: {
        carregarPerfil() {
            usernameGithub = atividade10.username
            const endpoint = `https://api.github.com/users/${usernameGithub}`
        
            if(usernameGithub != ''){
                fetch(endpoint)
                    .then(response => response.json())
                    .then(json => {
                        if(json.message != "Not Found"){
                            atividade10.repositoriesGithub = []
                            atividade10.cardActive = false
                            atividade10.userGithub = json.login
                            atividade10.location = json.location
                            atividade10.urlHtml = json.html_url
                            atividade10.profilePicture = json.avatar_url
                            atividade10.carregarProjetos(json.repos_url)
                        }else{
                            atividade10.checker = true
                            atividade10.cardActive = false
                        }
                    })
            } else {
                atividade10.checker = true
            }
        },
        limparPerfil(){
            atividade10.cardActive = false
        },
        carregarProjetos(url) {
            const endpoint = url
        
            fetch(endpoint)
            .then(response => response.json())
            .then(json => {
                json.forEach((projeto, index) => {
                    atividade10.repositoriesGithub[index] = {
                        name: projeto.name,
                        urlHtml: projeto.html_url,
                        description: projeto.description
                    }
                })
                atividade10.cardActive = true
                atividade10.checker = false
            })
        }
    }
}) 