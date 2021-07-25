//Atividade 11 07/07
const atividade11 = new Vue({
    el: '#atividade11',
    data: {
        quantity: 0,
        typesOfNotices: [
            {
                name: "cpi da covid",
                status: false,
            },
            {
                name: "vacina",
                status: false,
            },
            {
                name: "#fato ou #fake",
                status: false,
            },
            {
                name: "auxilio emergencial",
                status: false,
            },
            {
                name: "economia",
                status: false,
            },
            {
                name: "musica",
                status: false,
            },
            {
                name: "tecnologia",
                status: false,
            },
            {
                name: "videos",
                status: false,
            },
            {
                name: "podcast",
                status: false,
            },
            {
                name: "politica",
                status: false,
            },
            {
                name: "mundo",
                status: false,
            },
            {
                name: "cinema",
                status: false,
            },
            {
                name: "ciencia",
                status: false,
            },
            {
                name: "educacao",
                status: false,
            },
            {
                name: "imposto de renda",
                status: false,
            }
        ]
    },
    methods: {
        clearList(){
            for (notice of this.typesOfNotices) {
                notice.status = false
            }
            this.quantity = 0
        },
        selectItem(index){
            if(this.typesOfNotices[index].status === true){
                this.typesOfNotices[index].status = false
                this.quantity--
            } else {
                this.typesOfNotices[index].status = true
                this.quantity++
            }
        }
    },
    computed: {
        isDisabled() {
          return (!this.quantity > 0 ) 
        }
      }
})