Vue.createApp({
    data(){
        return {
            active: false,
        };
    },
    methods: {
        toggle(){
            this.active = !this.active;
        }

    }
}).mount('#app')
