const app = new Vue({
    el: '#app',
    data: {
        name: "eduardo berg",
        mostrarMensagem: false,
        numbers: [1, 2, 3]
    },
    filters: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})

const bk = new Vue({
    el: '#bk',
    data: {
        products: [
            {
                id: 1,
                name: 'Combo Super Burguer I',
                description: 'Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada',
                price: 9.90,
                image: 'assets/images/img1.png',
                amount: 0
            },
            {
                id: 2,
                name: 'Combo Super Burguer II',
                description: 'Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada',
                price: 19.90,
                image: 'assets/images/img2.png',
                amount: 0
            },
            {
                id: 3,
                name: 'Combo Super Burguer III',
                description: 'Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada',
                price: 29.90,
                image: 'assets/images/img3.png',
                amount: 0
            },
            {
                id: 4,
                name: 'Combo Super Burguer IV',
                description: 'Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada',
                price: 39.90,
                image: 'assets/images/img4.png',
                amount: 0
            },
            {
                id: 5,
                name: 'Combo Super Burguer V',
                description: 'Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada',
                price: 49.90,
                image: 'assets/images/img5.png',
                amount: 0
            },
        ],
        selectedProducts: []
    },
    filters: {
        formatMoney(value) {
            return "R$ " + value.toFixed(2).replace(".", ",")
        }
    },
    methods: {
        addProduct(product) {
            product.amount++
            this.addProductToInvoice(product)
        },
        removeProduct(product) {
            if (product.amount > 0) {
                product.amount--
            }
            this.removeProductFromInvoice(product)
        },
        addProductToInvoice(product) {
            if(!this.selectedProducts.includes(product)){
                this.selectedProducts.push(product)
            }
        },
        removeProductFromInvoice(product){
            if(this.selectedProducts.includes(product) && product.amount === 0){
                this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1)
            }
        }
    }
})
