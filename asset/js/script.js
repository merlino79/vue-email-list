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

        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(resp.data.response)
                    this.utente.push(resp.data.response)
                })
                .catch((err) => {
                    console.log(err);
                })

        }









    },

});

//console.log(root);