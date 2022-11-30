const { createApp } = Vue;
createApp({
    // ************ VARIABILI ************
    data() {
        return {
            //STRINGHE

            //NUMERI

            //BOOLEANI

            //ARRAY
            mailList: [],
            //OGGETTI

        }
    },
    // ************ FUNZIONI ************
    methods: {
        getData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail?" + Math.random()).then((resp) => {
                this.mailList.push(resp.data.response)
            });
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getData();
        }
    }
}).mount('#my-app');