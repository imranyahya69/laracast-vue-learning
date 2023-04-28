let app = {
    components: {
        'app-button': {
            template:
                `
                <button 
                class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2"
                :class="disabledClass" 
                :disabled="processing"
            >
                <slot />
            </button>
                `,
                data() {
                    return {
                        processing:true,
                        disabledClass: 'disabled:cursor-not-allowed'
                    }
                },
                mounted() {
                    
                },
        }
    }
};

Vue.createApp(app).mount('#app');
//slot is used above to enable dynamic button text in the blade or html