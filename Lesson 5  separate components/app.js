import AppButton from "./js/components/AppButton.js";
let app = {
    components: {
        'app-button': AppButton
    }
};

Vue.createApp(app).mount('#app');
//slot is used above to enable dynamic button text in the blade or html