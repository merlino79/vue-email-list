const root = new Vue({

    el: '#root',
    data: {

        utente: [],



    },
    methods: {

    },

    created() {

    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp) => {
                console.log(resp.data.response)
                this.utente.push(resp.data.response)
            })
            .catch((err) => {
                console.log(err);
            })







    },

});

//console.log(root);