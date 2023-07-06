import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import router from "./routes/routes"

//theme
import "primevue/resources/themes/fluent-light/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

import 'primeicons/primeicons.css';

createApp(App).use(PrimeVue).use(router).mount("#app");

