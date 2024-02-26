// composables
import { createApp } from "vue";

// routes
import router from "./router"

// main component
import App from "./App.vue";

const app = createApp(App)
app.use(router).mount('#app')