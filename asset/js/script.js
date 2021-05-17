const root = new Vue({

    el: '#root',
    data: {

        utente: [],
        loading: true,
        utenteActive: 0,



    },
    methods: {

    },

    created() {

    },

    mounted() {

        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(resp);
                    console.log(resp.data.response)
                    this.utente.push(resp.data.response)
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                })

        }









    },

});

//console.log(root);